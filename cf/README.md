# Contact Form Cloudflare Worker

This Cloudflare Worker handles contact form submissions and forwards them to Discord.

## Setup Instructions

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

### 3. Set Discord Webhook URL

Create a Discord webhook in your server:
1. Go to Server Settings > Integrations > Webhooks
2. Click "New Webhook"
3. Copy the webhook URL

Then set it as a secret:

```bash
cd cloudflare-worker
wrangler secret put DISCORD_WEBHOOK_URL
```

Paste your Discord webhook URL when prompted.

### 4. Deploy the Worker

```bash
wrangler deploy
```

### 5. Update Your Contact Form

After deployment, update the worker URL in `app/contact/page.tsx`:

```typescript
const response = await fetch("https://YOUR_WORKER_URL.workers.dev", {
```

Replace `YOUR_WORKER_URL` with your actual worker URL from the deployment output.

## Features

- ✅ Sends contact form data to Discord
- ✅ Logs IP address, country, city
- ✅ Logs user agent and timestamp
- ✅ CORS enabled
- ✅ Input validation
- ✅ Error handling

## Security

In production, update the CORS origin in `index.js`:

```javascript
"Access-Control-Allow-Origin": "https://lkang.au"
```

## Testing

Test with curl:

```bash
curl -X POST https://YOUR_WORKER_URL.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```
