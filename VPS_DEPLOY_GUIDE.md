# 🚀 BellBee Media VPS Deployment Guide

This guide provides step-by-step instructions for deploying the **BellBee Media platform** to a Ubuntu/Debian VPS.

## 📋 Prerequisites
- A VPS running **Ubuntu 22.04+** or **Debian 11+**.
- A domain name (e.g., `bellbeemedia.com`) pointed to your VPS IP address.
- SSH access to your server.

---

## 🛠️ Quick Installation

### 1. Connect and Clone
Connect to your VPS via SSH and clone the repository:
```bash
git clone https://github.com/your-username/bellbee-media.git
cd bellbee-media
```

### 2. Run the Setup Script
The included script will automatically install Node.js, Nginx, PM2, and Certbot, configure Nginx, and start the application on port `44100`:
```bash
sudo bash deploy/install.sh
```

### 3. Configure Environment Variables
Copy the example environment file and edit it:
```bash
cp deploy/env.example .env
nano .env
```
After editing, restart the app to load any configuration updates:
```bash
pm2 restart bellbee-media
```

### 4. Enable SSL (HTTPS)
Once your DNS is pointing to the server IP, run Certbot to secure your site:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🔄 Updating the Website
Whenever you push new changes to GitHub, you can update your live site by running:
```bash
bash deploy/pull-and-deploy.sh
```

---

## 📂 Deployment File Structure
| File | Purpose |
|------|---------|
| `deploy/install.sh` | One-shot setup: Installs dependencies, Nginx, PM2, and configures the service. |
| `deploy/pull-and-deploy.sh` | Pulls latest code from Git, runs checks, and restarts PM2. |
| `deploy/ecosystem.config.cjs` | PM2 process configuration running with ESM node-tsx. |
| `deploy/nginx/bellbeemedia.com.conf` | Nginx reverse proxy configuration. |
| `deploy/env.example` | Template for environment variables. |

---

## 🛠️ Troubleshooting & Commands

### PM2 Management
```bash
pm2 status                  # Check app status
pm2 logs bellbee-media      # View live logs
pm2 restart all             # Restart all applications
```

### Nginx Management
```bash
sudo nginx -t               # Test Nginx configuration
sudo systemctl restart nginx # Apply Nginx changes
```

### Checking Logs
If the app doesn't start, check the PM2 error logs:
```bash
pm2 logs bellbee-media --err
```
