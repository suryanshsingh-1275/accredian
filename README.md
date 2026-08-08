Accredian Enterprise — Landing Page Clone

A partial clone of the Accredian Enterprise landing page, built as a Full Stack Developer Intern assignment. Recreates the complete landing page experience — navigation, hero, stats, partnerships, course offerings, FAQs, testimonials and a working lead capture form — using Next.js App Router and TypeScript.

Tech Stack
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Plain CSS (globals.css), no CSS framework
Icons: lucide-react
Deployment: Vercel
Features
Fully responsive layout (desktop, tablet, mobile)
Smooth scroll navigation with a mobile hamburger menu
Sections: Hero, Track Record (Stats), Partnerships, Accredian Edge, Domain Expertise, Course Segmentation, Strategic Skill Enhancement, CAT Framework, How It Works, FAQ (accordion), Testimonials, Lead Capture Form, Footer
Functional lead capture form wired to a Next.js API route, with loading, success and error states
Reusable, single-responsibility components — one component per section
Project Structure
app/
├── api/
│   └── route.ts        # POST /api — handles lead submissions
├── globals.css          # all styling
├── layout.tsx            # root layout (html/body, navbar, footer)
├── page.tsx               # assembles all homepage sections
└── favicon.ico

components/
├── Navbar.tsx
├── Hero.tsx
├── Stats.tsx
├── Partnerships.tsx
├── AccredianEdge.tsx
├── DomainExpertise.tsx
├── CourseSegmentation.tsx
├── StrategicSkill.tsx
├── CATFramework.tsx
├── HowItWorks.tsx
├── FAQ.tsx
├── Testimonials.tsx
├── LeadForm.tsx
└── Footer.tsx
Getting Started
bash
# install dependencies
npm install

# run the dev server
npm run dev

Open http://localhost:3000 to view it.

API

POST /api

Accepts a lead submission and logs it server-side (no external database — easy to swap in one later).

Request body:

json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Acme Inc",
  "message": "Interested in enterprise training."
}

Response:

json
{ "success": true, "message": "Thanks! Our team will contact you shortly." }

name and email are required — a 400 is returned with an explanatory message if either is missing.

Deployment

Deployed on Vercel. To deploy your own copy:

Push this repo to GitHub.
Import the repo on vercel.com/new.
Vercel auto-detects Next.js — no config needed. Click Deploy.
AI Usage Disclosure

AI tools (Claude) were used during development for:

Initial component planning and structuring the section-by-section layout
Debugging a file/content mismatch issue where several component files had gotten mixed up (e.g. the API route logic ended up inside Footer.tsx, and two component files had swapped content)
Code suggestions for the StrategicSkill and Footer components, built to match CSS classes that already existed in the stylesheet
Responsive layout troubleshooting
API route implementation for the lead capture form

All AI-assisted output was:

Manually reviewed line-by-line before being accepted
Adjusted for correctness (e.g. adding missing "use client" directives, removing unused imports, fixing the root layout structure)
Tested locally with npm run dev across desktop and mobile viewport widths
Verified end-to-end — including submitting the lead form and confirming the API logs and success message work correctly

Final implementation decisions, structure, and content were reviewed and approved manually.