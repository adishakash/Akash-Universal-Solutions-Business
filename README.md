# Akash Universal Solutions — Website

A complete, high-converting business website for **Akash Universal Solutions** — IT outsourcing services for US businesses.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Install & Run

```bash
# Navigate to the project folder
cd "Akash Universal Solutions"

# Install dependencies
npm install

# Start development server
npm start
```

The site will open at **http://localhost:3000**

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky navbar with mobile menu
│   ├── Hero.jsx            # Hero section with stats
│   ├── Services.jsx        # 5 service cards
│   ├── WhyUs.jsx           # Why choose us + cost comparison table
│   ├── Process.jsx         # 4-step process
│   ├── CaseStudies.jsx     # 3 interactive case studies
│   ├── Pricing.jsx         # 3 plans (monthly/annual toggle)
│   ├── Testimonials.jsx    # 6 client testimonials
│   ├── Contact.jsx         # Contact form + info
│   ├── Footer.jsx          # Full footer
│   ├── FloatingCTA.jsx     # WhatsApp button + mobile sticky bar
│   ├── AuditModal.jsx      # Free audit popup modal
│   └── ExitPopup.jsx       # Exit intent lead capture popup
├── hooks/
│   └── useInView.js        # Scroll animation hook
├── App.js
├── index.js
└── index.css               # Tailwind + custom styles

public/
├── index.html              # Main HTML with SEO meta tags
└── cold-call-landing.html  # Standalone cold call landing page
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `build/` folder.

---

## ☁️ Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or link to GitHub repo and auto-deploy on push
```

**Or drag & drop the `build/` folder at [vercel.com/new](https://vercel.com/new)**

---

## ☁️ Deploy to Netlify

```bash
# Build first
npm run build

# Option 1: Drag & drop build/ folder at app.netlify.com
# Option 2: Connect GitHub repo (auto-deploys on every push)
# Option 3: Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

---

## 🔧 Customization

### Update Contact Info
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
- Replace email: `adish@akashuniversalsolutions.com`
- Replace WhatsApp number in `href="https://wa.me/YOURNUMBER"`
- Replace phone number

### Connect Contact Form to Backend
In `src/components/Contact.jsx`, replace the `setTimeout` in `handleSubmit` with a real API call:
```js
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
});
```

Recommended services: **Formspree**, **EmailJS**, **Resend**, or your own backend.

### Update Case Studies & Testimonials
Edit `src/components/CaseStudies.jsx` and `src/components/Testimonials.jsx` with real client data.

### Colors & Branding
Update `tailwind.config.js` → `theme.extend.colors.brand` to change the color palette.

---

## 🧪 Cold Call Landing Page

A standalone HTML landing page is available at:
```
/cold-call-landing.html
```
(No React required — pure HTML/CSS/JS)

Use this URL in cold call scripts:
> "Go to **akashuniversalsolutions.com/cold-call-landing.html** to grab your free audit"

---

## 📈 SEO

The site is optimized for:
- `IT outsourcing USA`
- `website optimization services`
- `hire developers from India`
- `business automation services`
- `custom web development USA`

Meta tags are in `public/index.html`. Update OG image by adding `og:image` meta tag pointing to a real image.

---

## 💡 Brand Assets

### Logo
Text-based logo: **AKASH** + gradient icon square with "A"

### Tagline Options
1. *"Premium IT. Proven Results. No US Price Tag."*
2. *"Your Growth. Our Code."*
3. *"The Smarter Way to Scale Your Business Tech."*
4. *"US-Quality IT. India-Smart Pricing."*
5. *"From Broken Tech to Business Growth."*

### CTA Copy Variations
- "Get My Free Audit" (primary)
- "Show Me What I'm Losing" (curiosity)
- "Fix My Website Now" (urgency)
- "Start Saving 60% Today" (ROI-focused)
- "Book a Free Strategy Call" (low commitment)

---

## 📞 Cold Call Script Tip

> *"Hi [Name], this is [Your Name] from Akash Universal Solutions. We help US businesses like yours get more leads from their website — we recently helped a [similar business] increase their leads by 287% in 90 days. I'd love to do a free website audit for you — completely free, takes 10 minutes. Would Tuesday or Thursday work for a quick call?"*

---

Built with React + Tailwind CSS. Licensed for use by Akash Universal Solutions.
