# Contact Form - Email & SMS Integration Setup Guide

Your contact form is now set up to send leads via **Email** and **SMS**. Follow these steps to get it working:

## Step 1: Install Dependencies

Run the following command to install the new backend packages:

```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory (use `.env.example` as reference):

```bash
cp .env.example .env
```

Then edit the `.env` file with your credentials:

### Email Setup (Gmail)

1. Go to [Google Account Security Settings](https://myaccount.google.com/security)
2. Enable "2-Step Verification"
3. Generate an "App Password" for Mail (16-character password)
4. Add to `.env`:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   OWNER_EMAIL=kaushalmanral001@gmail.com
   ```

### SMS Setup (Twilio - Optional)

1. Sign up at [Twilio.com](https://www.twilio.com/)
2. Get your credentials from the Twilio Console:
   - Account SID
   - Auth Token
   - Twilio Phone Number (you get one when you sign up)
3. Add to `.env`:
   ```
   TWILIO_ACCOUNT_SID=your-account-sid
   TWILIO_AUTH_TOKEN=your-auth-token
   TWILIO_PHONE_NUMBER=+1XXXXXXXXXX
   OWNER_PHONE=+91XXXXXXXXXX
   ```

## Step 3: Run Both Frontend and Backend

Use this command to run both the React app and the backend server simultaneously:

```bash
npm run dev:all
```

Or run them separately in different terminals:

**Terminal 1 (Frontend):**
```bash
npm run dev
```

**Terminal 2 (Backend):**
```bash
npm run dev:server
```

## Step 4: Test the Contact Form

1. Go to your contact page: `http://localhost:5173/contact`
2. Fill out the form and submit
3. Check your email inbox for the lead notification
4. (If SMS is configured) You'll also receive an SMS

## What Happens When Someone Submits the Form

1. **Lead Email** - You receive a detailed email with all the contact information
2. **Confirmation Email** - The user gets a confirmation that their message was received
3. **SMS Alert** (optional) - You get an SMS notification about the new lead

## Email Template Example

You'll receive emails with this format:
```
Subject: New Contact Form Submission: [User's Subject]

New Lead from Contact Form
Name: John Doe
Email: john@example.com
Phone: +91 9876543210
Subject: Tour Booking
Message: [Full message text]

Submitted on: 2/9/2026, 3:45:30 PM
```

## Troubleshooting

### "Could not connect to server" error
- Make sure the backend server is running (`npm run dev:server`)
- Check that port 5000 is not blocked
- Verify `.env` file exists and has all required variables

### Gmail not sending emails
- Use an [App Password](https://support.google.com/accounts/answer/185833), not your regular Gmail password
- Ensure 2-Step Verification is enabled on your Google Account
- Check that the email address in `.env` matches your Gmail account

### SMS not sending
- Verify Twilio credentials are correct
- Ensure phone numbers are in E.164 format: `+[country code][number]`
- Check Twilio account has SMS credits

### Form submits but no email received
- Check spam/junk folder for emails
- Verify `OWNER_EMAIL` in `.env` is correct
- Check server logs for errors: look at the terminal running `npm run dev:server`

## Security Notes

- Never commit `.env` file to Git (it's in `.gitignore`)
- Keep your Twilio and Gmail credentials private
- For production, use environment variables provided by your hosting service
- Add rate limiting to prevent spam

## Production Deployment

When deploying to production:

1. Use environment variables from your hosting service (Vercel, Heroku, etc.)
2. Update the API URL in `ContactPage.jsx` from `localhost:5000` to your production backend URL
3. Deploy backend to a service like Heroku, Railway, or AWS
4. Update CORS settings in `server.js` to allow your production domain

## Cost Considerations

- **Gmail**: Free (limited to 500 emails/day)
- **Twilio**: Pay-as-you-go (~$0.0075 per SMS in India)

---

Questions? Need help? Check the server console logs for detailed error messages!
