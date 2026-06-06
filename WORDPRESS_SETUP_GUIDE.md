# WordPress Setup Guide — Bell Bee Media CMS

This guide walks you through setting up WordPress as the headless CMS that powers the Bell Bee Media website.

---

## Prerequisites

- A WordPress installation (self-hosted or managed hosting)
- Admin access to your WordPress dashboard
- PHP 8.0+ and WordPress 6.0+

---

## Step 1 — Install the WPGraphQL Plugin

WPGraphQL exposes your WordPress content as a GraphQL API.

1. Go to **WordPress Admin → Plugins → Add New**
2. Search for **"WPGraphQL"**
3. Install and **Activate** it
4. Go to **GraphQL → Settings** and note your endpoint URL (usually `https://yourdomain.com/graphql`)

> **Test it:** Visit `https://yourdomain.com/graphql` in your browser — you should see a GraphQL IDE (GraphiQL).

---

## Step 2 — Install Advanced Custom Fields (ACF) Pro

ACF is used to add structured fields to your Custom Post Types.

1. Go to **Plugins → Add New**
2. Install **"Advanced Custom Fields"** (free) or **ACF Pro** (recommended for repeater fields)
3. Activate it

---

## Step 3 — Install WPGraphQL for ACF

This makes your ACF fields available in the GraphQL API.

1. Download **WPGraphQL for ACF** from: https://acf.wpgraphql.com/
2. Upload and activate via **Plugins → Add New → Upload Plugin**

---

## Step 4 — Register Custom Post Types

Add this code to your theme's `functions.php` or a custom plugin:

```php
<?php
// ─── Custom Post Types for Bell Bee Media ───────────────────────────────────

function bellbee_register_post_types() {

    // Case Studies
    register_post_type('case_study', [
        'labels'       => ['name' => 'Case Studies', 'singular_name' => 'Case Study'],
        'public'       => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'caseStudy',
        'graphql_plural_name' => 'caseStudies',
        'supports'     => ['title', 'thumbnail', 'excerpt'],
        'rewrite'      => ['slug' => 'case-studies'],
        'menu_icon'    => 'dashicons-portfolio',
    ]);

    // Success Stories
    register_post_type('success_story', [
        'labels'       => ['name' => 'Success Stories', 'singular_name' => 'Success Story'],
        'public'       => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'successStory',
        'graphql_plural_name' => 'successStories',
        'supports'     => ['title', 'thumbnail'],
        'rewrite'      => ['slug' => 'success-stories'],
        'menu_icon'    => 'dashicons-star-filled',
    ]);

    // Job Openings
    register_post_type('job_opening', [
        'labels'       => ['name' => 'Job Openings', 'singular_name' => 'Job Opening'],
        'public'       => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'jobOpening',
        'graphql_plural_name' => 'jobOpenings',
        'supports'     => ['title'],
        'rewrite'      => ['slug' => 'careers'],
        'menu_icon'    => 'dashicons-businessman',
    ]);

    // Proposal Submissions (private — not public)
    register_post_type('proposal_submission', [
        'labels'       => ['name' => 'Proposal Submissions', 'singular_name' => 'Proposal Submission'],
        'public'       => false,
        'show_ui'      => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'proposalSubmission',
        'graphql_plural_name' => 'proposalSubmissions',
        'supports'     => ['title'],
        'menu_icon'    => 'dashicons-email-alt',
        'capabilities' => ['create_posts' => 'do_not_allow'],
        'map_meta_cap' => true,
    ]);
}
add_action('init', 'bellbee_register_post_types');
```

---

## Step 5 — Create ACF Field Groups

Go to **Custom Fields → Add New** for each group below:

### 5a. Blog Post Fields (`blogFields`)
**Location:** Post Type = `post`

| Field Name  | Field Key      | Type     | Notes                          |
|-------------|----------------|----------|--------------------------------|
| Read Time   | `read_time`    | Text     | e.g. "8 min read"             |
| Author Role | `author_role`  | Text     | e.g. "Head of SEO"            |

**In ACF Settings → GraphQL:** Enable "Show in GraphQL" → Field group name: `blogFields`

---

### 5b. Case Study Fields (`caseStudyFields`)
**Location:** Post Type = `case_study`

| Field Name   | Field Key      | Type     | Notes                          |
|--------------|----------------|----------|--------------------------------|
| Tag          | `tag`          | Text     | e.g. "Social Media"           |
| Metric       | `metric`       | Text     | e.g. "+320%"                  |
| Metric Label | `metric_label` | Text     | e.g. "Engagement Rate"        |
| Description  | `description`  | Textarea | Short summary paragraph        |

**GraphQL Name:** `caseStudyFields`

---

### 5c. Success Story Fields (`successStoryFields`)
**Location:** Post Type = `success_story`

| Field Name | Field Key   | Type     | Notes                                  |
|------------|-------------|----------|----------------------------------------|
| Tag        | `tag`       | Text     | e.g. "Social Media + Production"      |
| Challenge  | `challenge` | Textarea | The client's problem                   |
| Strategy   | `strategy`  | Textarea | What Bell Bee did                      |
| Results    | `results`   | Textarea | One result per line (newline-separated) |

**GraphQL Name:** `successStoryFields`

---

### 5d. Job Opening Fields (`jobFields`)
**Location:** Post Type = `job_opening`

| Field Name  | Field Key    | Type | Notes                                          |
|-------------|--------------|------|------------------------------------------------|
| Department  | `department` | Text | e.g. "Social Media"                           |
| Location    | `location`   | Text | e.g. "Remote" or "Islamabad, Pakistan"        |
| Type        | `type`       | Text | e.g. "Full-Time"                              |
| Description | `description`| Textarea | Full job description                       |
| Apply URL   | `apply_url`  | URL  | Link to apply (or `mailto:careers@…`)         |

**GraphQL Name:** `jobFields`

---

## Step 6 — Register the Proposal Submission Mutation

Add this to your `functions.php` or a custom plugin to allow the website to submit proposal forms via GraphQL:

```php
<?php

add_action('graphql_register_types', function () {

    // Input type for the mutation
    register_graphql_input_type('CreateProposalSubmissionInput', [
        'description' => 'Input for creating a proposal submission',
        'fields' => [
            'fullName' => ['type' => ['non_null' => 'String'], 'description' => 'Full name'],
            'email'    => ['type' => ['non_null' => 'String'], 'description' => 'Email address'],
            'company'  => ['type' => 'String', 'description' => 'Company name'],
            'phone'    => ['type' => 'String', 'description' => 'Phone number'],
            'services' => ['type' => 'String', 'description' => 'Comma-separated services'],
            'details'  => ['type' => 'String', 'description' => 'Project details'],
        ],
    ]);

    // Payload type
    register_graphql_object_type('CreateProposalSubmissionPayload', [
        'description' => 'Result of a proposal submission',
        'fields' => [
            'success' => ['type' => 'Boolean', 'description' => 'Whether it was saved'],
            'message' => ['type' => 'String', 'description' => 'Human-readable message'],
        ],
    ]);

    // The mutation itself
    register_graphql_mutation('createProposalSubmission', [
        'inputFields'         => ['input' => ['type' => ['non_null' => 'CreateProposalSubmissionInput']]],
        'outputFields'        => ['createProposalSubmission' => ['type' => 'CreateProposalSubmissionPayload']],
        'mutateAndGetPayload' => function ($input) {
            $data = $input['input'];
            $post_id = wp_insert_post([
                'post_type'   => 'proposal_submission',
                'post_title'  => sanitize_text_field($data['fullName']) . ' — ' . sanitize_email($data['email']),
                'post_status' => 'private',
                'meta_input'  => [
                    'full_name' => sanitize_text_field($data['fullName']),
                    'email'     => sanitize_email($data['email']),
                    'company'   => sanitize_text_field($data['company'] ?? ''),
                    'phone'     => sanitize_text_field($data['phone'] ?? ''),
                    'services'  => sanitize_text_field($data['services'] ?? ''),
                    'details'   => sanitize_textarea_field($data['details'] ?? ''),
                ],
            ]);

            if (is_wp_error($post_id)) {
                return ['createProposalSubmission' => ['success' => false, 'message' => 'Failed to save. Please try again.']];
            }

            // Optional: send email notification
            wp_mail(
                'hello@bellbeemedia.com',
                'New Proposal Request from ' . sanitize_text_field($data['fullName']),
                "Name: {$data['fullName']}\nEmail: {$data['email']}\nCompany: {$data['company']}\nPhone: {$data['phone']}\nServices: {$data['services']}\n\nDetails:\n{$data['details']}"
            );

            return ['createProposalSubmission' => ['success' => true, 'message' => 'Thank you! We will reach out within 24 hours with your personalised strategy.']];
        },
    ]);
});
```

---

## Step 7 — Set Environment Variables

In your Remix app's `.env` file (create it in the project root if it doesn't exist):

```env
# Your WordPress GraphQL endpoint
WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql

# WordPress Application Password for authenticated mutations (proposal form)
# Generate at: WordPress Admin → Users → Your Profile → Application Passwords
WORDPRESS_AUTH_TOKEN=your_username:generated_app_password_base64_encoded
```

### Generating the Auth Token

1. Go to **WordPress Admin → Users → Your Profile**
2. Scroll to **Application Passwords** at the bottom
3. Enter a name (e.g. "Bell Bee Remix App") and click **Add New Application Password**
4. Copy the generated password
5. Base64-encode `your_username:generated_password`:
   ```sh
   echo -n "admin:AbCd EfGh IjKl MnOp" | base64
   ```
6. Paste the result as `WORDPRESS_AUTH_TOKEN`

---

## Step 8 — Create Content in WordPress

### Blogs
- Go to **Posts → Add New**
- Add title, content, categories, and featured image
- Fill in the **Blog Fields** (read time, author role) in the ACF panel

### Case Studies
- Go to **Case Studies → Add New**
- Add title and featured image
- Fill in **Case Study Fields**: tag, metric, metric label, description

### Success Stories
- Go to **Success Stories → Add New**
- Add title
- Fill in **Success Story Fields**: tag, challenge, strategy, results (one per line)

### Job Openings
- Go to **Job Openings → Add New**
- Add title (job title)
- Fill in **Job Fields**: department, location, type, description, apply URL

---

## Step 9 — Verify the Integration

After setting up, test each GraphQL query in the WPGraphQL IDE at `https://your-site.com/graphql`:

**Test blogs:**
```graphql
{
  posts(first: 5) {
    nodes {
      id
      title
      slug
      date
      categories { nodes { name } }
      blogFields { readTime authorRole }
    }
  }
}
```

**Test case studies:**
```graphql
{
  caseStudies(first: 5) {
    nodes {
      id
      title
      caseStudyFields { tag metric metricLabel description }
    }
  }
}
```

**Test jobs:**
```graphql
{
  jobOpenings(first: 10) {
    nodes {
      id
      title
      jobFields { department location type applyUrl }
    }
  }
}
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `caseStudies` not in schema | Re-check CPT registration — ensure `show_in_graphql => true` and flush permalinks (**Settings → Permalinks → Save**) |
| ACF fields not in GraphQL | Open the ACF Field Group, go to **GraphQL** tab and enable "Show in GraphQL" |
| Auth token rejected | Ensure the Base64 encoding is correct — username and password separated by `:` |
| 404 on `/graphql` | WPGraphQL not activated, or your server blocks `.php`-less URLs (update `.htaccess`) |
| Empty `blogFields` | Add and save Blog Fields to a post to verify ACF is showing correctly |

---

## Permalinks Reminder

Any time you add a new Custom Post Type, go to:  
**WordPress Admin → Settings → Permalinks → Save Changes**

This flushes the rewrite rules so the new post type URLs work.

---

*Guide generated for Bell Bee Media — Remix 3 + WPGraphQL integration*
