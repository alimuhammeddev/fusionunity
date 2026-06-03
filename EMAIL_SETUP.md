# Email Setup Guide

## What I've Done

1. **Created API Route** (`app/api/send-email/route.ts`)
   - Handles form submissions on the backend
   - Sends emails directly without redirecting

2. **Updated Contact Form** (`app/contact/page.tsx`)
   - Removed `mailto:` redirect
   - Added API integration
   - Shows loading state while sending
   - Displays success/error messages
   - Clears form after successful submission

3. **Installed Dependencies**
   - Added `nodemailer` for email sending
   - Added `@types/nodemailer` for TypeScript support

## Setup Instructions

### Step 1: Get Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **Mail** and **Windows Computer**
5. Google will generate a 16-character password

### Step 2: Configure Environment Variables
1. Open `.env.local` in the root folder
2. Replace `your_app_password_here` with the 16-character password you got from step 1
3. Keep `EMAIL_USER` as `Fusionunityfoundation@gmail.com`

### Step 3: Test
1. Run `npm run dev` to start the development server
2. Go to the contact page
3. Fill in the form and click "Send Message"
4. You should see a success message (no page redirect!)
5. The email should arrive in `Fusionunityfoundation@gmail.com`

## Features
✅ No page redirect - stays on contact page
✅ Loading state with disabled inputs
✅ Success message for 5 seconds
✅ Error handling with user-friendly messages
✅ Email includes sender's reply address
✅ Beautiful HTML formatted email
