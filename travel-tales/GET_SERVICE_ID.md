# 📍 How to Get YOUR_SERVICE_ID from EmailJS

## Step-by-Step Guide

### 1. Go to EmailJS Dashboard
- Open [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- Log in with your EmailJS account

### 2. Click "Email Services" (Left Sidebar)
```
Dashboard Menu:
├── Overview
├── Email Services  ← CLICK HERE
├── Email Templates
└── Account
```

### 3. You'll See Your Gmail Service
It should look like this:
```
Gmail
Status: Connected
Service ID: service_xxxxxxxxxxxxxxxx
```

### 4. Copy the Service ID
The **Service ID** starts with `service_` followed by random characters.

Example: `service_abc123def456`

---

## Where in ContactPage.jsx to Paste It

### Line 33 (Send email to owner)
```javascript
await emailjs.send(
  "service_abc123def456",    // ← PASTE YOUR SERVICE ID HERE
  "YOUR_TEMPLATE_ID",
  {
```

### Line 45 (Send confirmation to user)
```javascript
await emailjs.send(
  "service_abc123def456",    // ← SAME SERVICE ID HERE
  "YOUR_CONFIRMATION_TEMPLATE_ID",
  {
```

---

## Quick Summary
| Item | Where to Find | Format |
|------|--------------|--------|
| Service ID | Dashboard → Email Services | `service_xxxxx` |
| Public Key | Dashboard → Account → API Keys | `pk_xxxxx` |
| Template IDs | Dashboard → Email Templates | `template_xxxxx` |

**You need only ONE Service ID for both emails!** 🎯
