# EmailJS Setup Guide - Frontend Only Contact Form

No backend needed! Send emails directly from the frontend using EmailJS.

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your email
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Connect New Service**
3. Select **Gmail** (or your preferred email provider)
4. Choose "Connect with Google"
5. Authorize EmailJS to access your Gmail
6. Copy your **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Templates

#### Template 1: Lead Notification (to you)
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it: `contact_form_lead`
4. Set **To Email**: `exploreshivaliks@gmail.com`
5. Use this template:

```
Subject: New Lead: {{subject}}

New Contact Form Submission
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Submitted via Contact Form
```

6. Click **Save**
7. Copy the **Template ID** (looks like: `template_xxxxx`)

#### Template 2: Confirmation Email (to user)
1. Click **Create New Template** again
2. Name it: `contact_form_confirmation`
3. Set **To Email**: `{{to_email}}`
4. Use this template:

```
Subject: We Received Your Message - Explore Shivalik

Hi {{user_name}},

Thank you for contacting Explore Shivalik!

We have received your message regarding: {{user_subject}}

Our team will get back to you within 24 hours.

In the meantime, if you have any urgent questions, feel free to call us at:
📞 +91 81910 04719

Best regards,
Explore Shivalik Team
```

6. Click **Save**
7. Copy the **Template ID**

### Step 4: Get Your Public Key
1. Go to **Account** > **API Keys**
2. Copy your **Public Key** (starts with `pk_`)

### Step 5: Update ContactPage.jsx
Replace the placeholder values in `ContactPage.jsx`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Paste your public key here

// In handleSubmit function:
await emailjs.send(
  "YOUR_SERVICE_ID",    // Paste your service ID
  "YOUR_TEMPLATE_ID",   // Paste template 1 ID (lead notification)
  // ... rest of code
);

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_CONFIRMATION_TEMPLATE_ID", // Paste template 2 ID (confirmation)
  // ... rest of code
);
```

### Step 6: Install & Test
```bash
npm install
npm run dev
```

1. Go to `/contact`
2. Fill out the form
3. Submit and check your email!

## Features

✅ **No Backend Required** - Runs entirely in the browser
✅ **Free Plan** - 200 emails/month included
✅ **Easy Setup** - No coding required beyond copying IDs
✅ **Automatic Replies** - Send confirmation emails to users
✅ **Gmail Integration** - Works with any email account

## Troubleshooting

### "Failed to send message"
- Check that all IDs are correctly copied
- Verify your Public Key is initialized
- Check browser console for detailed errors

### Not receiving emails
- Check spam/junk folder
- Verify template variables match the JavaScript object keys
- Test template by sending a test email from EmailJS dashboard

### Template not working
- Make sure variable names in template match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Use double curly braces `{{ }}`
- Test template in EmailJS dashboard first

## Cost
- **Free Plan**: 200 emails/month
- **Paid Plans**: Starting at $4/month for 1,000 emails

## Security Notes
- Public Key is safe to expose (it's called "public" for a reason!)
- Never expose Service ID or Private Key
- Email addresses are only used for sending, not stored

---

**That's it!** Your contact form now sends emails without a backend. 🎉
