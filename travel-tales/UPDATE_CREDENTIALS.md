# 🚀 Update Your EmailJS Credentials

You're almost there! Now update these 3 values in `src/Pages/Contact/ContactPage.jsx`:

## Where to Find Your Credentials

### 1. Public Key
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Click **Account** → **API Keys**
- Copy the **Public Key** (starts with `pk_`)

### 2. Service ID
- In EmailJS Dashboard, click **Email Services**
- You should see a Gmail service connected
- Copy the **Service ID** (format: `service_xxxxx`)

### 3. Template IDs
- Click **Email Templates** 
- You should have 2 templates created
- Get both **Template IDs** (format: `template_xxxxx`)

## Update ContactPage.jsx

Replace these 3 lines in `src/Pages/Contact/ContactPage.jsx`:

**Line 7:**
```javascript
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
```
Change to:
```javascript
emailjs.init("pk_xxxxxxxxxxxxxxxxxxxxxxxx");
```

**Line 33 & 45:**
```javascript
"YOUR_SERVICE_ID"
"YOUR_TEMPLATE_ID"
"YOUR_CONFIRMATION_TEMPLATE_ID"
```
Change to:
```javascript
"service_xxxxx"
"template_xxxxx"
"template_xxxxx"
```

---

**That's it!** Then run `npm run dev` and test the form! 🎉
