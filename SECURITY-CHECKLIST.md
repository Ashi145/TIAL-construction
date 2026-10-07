# Security Review Checklist for Tial Construction Website

## 1) Changed files

- index.html
  - Added favicon and Apple touch icon metadata.

- public/favicon.png
  - Added project logo asset for browser branding and deployment readiness.

- src/data/content.ts
  - Updated official company contact details and social URLs.

- src/pages/Contact.tsx
  - Updated the map embed to the real Haruna Towers address.

- src/components/Footer.tsx
  - Added visible direct-action contact links for X, TikTok, email, and WhatsApp.

- src/components/SocialIcons.tsx
  - Added a TikTok icon for direct message access.

- src/components/Logo.tsx
  - Switched to the actual project logo image asset.

---

## 2) What must be configured before production launch

### A. Security keys and secrets
- Set all required API keys in environment variables, not in source code.
- If forms are connected to email, CRM, or WhatsApp automation, store tokens in a secure backend or hosting secrets manager.
- Never commit secrets to GitHub or public repositories.

### B. DNS / hosting
- Confirm the production domain points to the correct hosting provider.
- Enable HTTPS only and force redirect from HTTP to HTTPS.
- Configure DNS records for the deployed domain and subdomains.
- Add a proper CNAME / apex record and ensure no stale DNS mappings remain.

### C. Email / SMTP
- Configure a real SMTP provider for form submissions or enquiry delivery.
- Validate SPF, DKIM, and DMARC for the sending domain.
- Test that outbound mail is accepted and not flagged as spam.
- Use a dedicated mailbox such as `tialconstructionlimited@gmail.com` or a verified business sender address.

### D. Security rules / access rules
- Restrict write permissions to the hosting server and deployment folders.
- Ensure only the app build output is exposed publicly.
- Disable directory listing if the host is configured for static hosting.
- Block access to source files, hidden config files, and build metadata from public URLs.
- Ensure no server-side executable file is publicly reachable.

### E. Uploaded file rules
- Reject executable file types such as `.php`, `.asp`, `.jsp`, `.exe`, `.dll`, `.sh`, and script archives.
- Disallow files containing dangerous extensions even if renamed.
- Only permit image/document types required by the business flow.
- Store uploaded files outside the public web root if possible.

---

## 3) Public security rules to verify

The following must be proven in testing:

1. A public user cannot read private enquiry records.
2. A public user cannot write or create project records through the frontend or public endpoints.
3. A malicious upload with a renamed `.php` file is rejected.
4. Social preview and sharing metadata works correctly.
5. Browser security headers are present and strong enough for production.
6. Search and indexing metadata is valid for SEO and rich result eligibility.

---

## 4) Test plan

### 4.1 Lighthouse SEO and Best Practices
Run Lighthouse against the production site and confirm:
- SEO >= 95
- Best Practices >= 95

Check for:
- valid title/meta description
- mobile-friendly layout
- no unsafe scripts or mixed content
- good accessibility and indexing metadata

### 4.2 SecurityHeaders.com
Use https://securityheaders.com to test the live production URL.
Target grade: A
Check for at least:
- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options` or equivalent framing protection
- `Strict-Transport-Security` on HTTPS

### 4.3 Google Rich Results Test
Submit the homepage and key pages to Google Rich Results Test.
Check for eligibility and confirm no structured data errors.
Verify that important pages expose clean schema/metadata for organization, business contact, and location.

### 4.4 WhatsApp / social link preview checks
Check that WhatsApp or social sharing previews show the right title, description, and image.
Suggested checks:
- Open the WhatsApp link to confirm it opens the correct contact number.
- Use a link preview validator or a browser share preview check.
- Validate that the favicon and metadata show correctly in the preview.

### 4.5 Rule tests proving public users cannot access private data
Manual or automated checks:
- Attempt to access project or enquiry endpoints as an anonymous user.
- Confirm the server returns 401/403 or equivalent denial.
- Confirm there is no unauthenticated list view of enquiries or project records.
- Confirm public pages do not expose private admin data.

### 4.6 Upload rejection test
Create a test upload called something like:
- `shell.php`
- `payload.php.jpg`
- `evil.php.txt`

Then attempt upload through the public form or any file endpoint.
Expected result:
- file is rejected
- extension is blocked
- no execution or storage occurs in the public path
- server returns a validation error instead of acceptance

### 4.7 Browser and network sanity checks
- Confirm no external API secret keys are visible in the frontend HTML or JS bundle.
- Confirm no admin routes are accessible without auth.
- Confirm all forms are using HTTPS.
- Confirm any SMTP or form backend endpoint is hidden behind a validated server-side process.

---

## 5) Minimum acceptance criteria before launch

The site is ready to go live only when all of the following are true:

- Lighthouse SEO and Best Practices scores are both >= 95
- SecurityHeaders.com grade is A
- Rich results validation shows no critical errors
- Public users cannot read enquiries or write projects
- Malicious uploads with renamed PHP extensions are rejected
- DNS, HTTPS, and email configuration are all validated in production
- Secret keys are not stored in public files or Git history
