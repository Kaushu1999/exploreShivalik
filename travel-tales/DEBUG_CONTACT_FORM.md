# 🔍 How to Check Errors When Sending Message

## Step 1: Open Browser Developer Tools
- On the contact page: `http://localhost:5174/contact`
- Press **F12** or right-click → **Inspect**
- Go to **Console** tab

## Step 2: Fill & Submit the Form
- Fill out the contact form
- Click "Send Message"

## Step 3: Check Console Logs
You'll see messages like:

### ✅ Success (Green Messages)
```
📤 Sending email to owner...
Form Data: {name: "John", email: "john@example.com", ...}
✅ Email to owner sent successfully!
📤 Sending confirmation email to user...
✅ Confirmation email sent successfully!
```

### ❌ Error (Red Messages)
```
❌ Error sending email: [error details]
Error Message: [specific error]
Error Status: [status code]
Full Error: [complete error object]
```

## Common Errors & Solutions

### Error 1: "Access to XMLHttpRequest has been blocked"
**Cause:** Public Key not initialized correctly
**Fix:** Check that public key in line 7 is correct and saved

### Error 2: "Invalid template ID"
**Cause:** Template ID doesn't exist or is wrong
**Fix:** Get correct template ID from EmailJS → Email Templates

### Error 3: "Invalid service ID"  
**Cause:** Service ID doesn't exist
**Fix:** Get correct service ID from EmailJS → Email Services

### Error 4: "Missing required variable"
**Cause:** Template doesn't have the variables being sent
**Fix:** Make sure template has these variables:
- Lead email template: `{{from_name}}`, `{{from_email}}`, `{{message}}`, etc.
- Confirmation template: `{{user_name}}`, `{{to_email}}`, etc.

### Error 5: Status 422 or 400
**Cause:** Form data format doesn't match template
**Fix:** Check variable names in template match exactly (case-sensitive!)

## Troubleshooting Steps

1. **Clear browser cache**: Ctrl+Shift+Delete → Clear cache
2. **Hard refresh**: Ctrl+Shift+R or Cmd+Shift+R
3. **Check all credentials**: Public key, Service ID, Template ID
4. **Check template variables**: Open EmailJS dashboard → Email Templates → Check variable names

## Quick Test
Go to `/contact` and submit a test with:
- Name: Test
- Email: your-email@gmail.com
- Phone: any number
- Subject: Test
- Message: Testing email form

Watch the console for detailed error messages! 👀
