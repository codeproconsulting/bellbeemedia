#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting BellBee Media VPS setup..."

# 1. Update system packages
echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# 2. Install essential tools
echo "🛠️ Installing curl, git, certbot, and nginx..."
sudo apt install -y curl git nginx certbot python3-certbot-nginx build-essential

# 3. Install Node.js v24 (Node version matches package.json >=24.3.0 requirement)
echo "🟢 Installing Node.js v24..."
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify node installation
echo "✅ Node version: $(node -v)"
echo "✅ NPM version: $(npm -v)"

# 4. Install PM2 globally
echo "📦 Installing PM2 globally..."
sudo npm install -g pm2

# 5. Install application dependencies
echo "⚙️ Installing project dependencies..."
npm install

# 6. Configure Nginx
echo "🌐 Configuring Nginx reverse proxy..."
if [ -f "deploy/nginx/bellbeemedia.com.conf" ]; then
    sudo cp deploy/nginx/bellbeemedia.com.conf /etc/nginx/sites-available/bellbeemedia.com
    sudo ln -sf /etc/nginx/sites-available/bellbeemedia.com /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nginx -t
    sudo systemctl restart nginx
    echo "✅ Nginx configured successfully!"
else
    echo "⚠️ Warning: deploy/nginx/bellbeemedia.com.conf not found. Skipping Nginx configuration."
fi

# 7. Start application with PM2
echo "▶️ Starting application with PM2..."
if [ -f "deploy/ecosystem.config.cjs" ]; then
    pm2 start deploy/ecosystem.config.cjs
    pm2 save
    # Setup startup script so PM2 runs on reboot
    sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
    echo "✅ Application started in PM2!"
else
    echo "⚠️ Warning: deploy/ecosystem.config.cjs not found. Starting with basic node-tsx setup."
    pm2 start --name "bellbee-media" --interpreter="node" --node-args="--import remix/node-tsx" server.ts
    pm2 save
fi

echo "🎉 Installation completed successfully!"
echo "👉 To enable SSL/HTTPS, run: sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com"
