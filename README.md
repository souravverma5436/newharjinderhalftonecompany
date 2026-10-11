# New Harjinder Halftone Company Website

Production-oriented React/Vite website for New Harjinder Halftone Company, an industrial printing business in Punjab, India.

## What Is Included

- Luxury industrial one-page website with sticky navigation and responsive mobile menu
- Editable product/service catalogue in `src/App.tsx`
- Manufacturing process timeline, quality section, industries, gallery lightbox, owner/GSTIN section, and footer
- Contact form with basic fields and EmailJS submission
- SEO basics: title, meta description, Open Graph tags, favicon placeholder, `robots.txt`, and `sitemap.xml`
- Environment placeholder for quote email routing

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`:

```bash
npm.cmd run dev
```

## Contact Form Configuration

Copy `.env.example` to `.env` and set:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxxxx
VITE_CANONICAL_URL=https://your-domain.com/
```

Create an EmailJS service and template in the EmailJS dashboard. The template should include these variables:

```text
full_name
company_name
phone_number
email
message
```

When the EmailJS values are empty, the form validates the fields but clearly states that EmailJS is not configured. Do not place EmailJS private keys or other secrets in client-side code.

## Information Still Needed Before Publishing

- Official logo, confirmed phone number, business email, and complete postal address
- Real product, machinery, and facility photography
- Confirmed list of products and services actually offered
- Preferred domain name and final canonical URL
- EmailJS service ID, template ID, and public key for contact form submissions

## Content Accuracy Notes

The site does not claim founding year, certifications, client relationships, production capacity, awards, full address, testimonials, or unverified contact details. The current gallery uses replaceable illustrative stock-style imagery and should be swapped with real company photos before launch.
