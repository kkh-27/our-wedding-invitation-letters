# AGENTS.md

# Project: Luxury Romantic Burmese Wedding Invitation

## 1. Project Overview

Build a premium digital wedding invitation website for a Burmese wedding reception (မင်္ဂလာဧည့်ခံပွဲ).

The website should feel like opening a beautiful, luxurious physical wedding invitation.

This is a personal wedding project. Prioritize visual quality, emotional experience, usability, performance, and maintainability.

## 2. Technology Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion for React (formerly Framer Motion)
- Lucide React
- Supabase for RSVP storage
- Vercel for deployment

Use stable compatible package versions. Avoid unnecessary dependencies.

## 3. Design Direction

Theme: Luxury Romantic.

Primary color:
- Sky Blue: #87CEEB

Supporting colors:
- Powder Blue: #DCEFF8
- Warm Ivory: #FFFDF8
- Champagne Gold: #D6B56D
- Deep Navy: #24445C
- Dusty Rose: #E9C8CB

Design principles:
- Elegant and romantic.
- Sophisticated, not overly decorative.
- Generous whitespace.
- Beautiful typography.
- Soft floral illustrations.
- Champagne gold details.
- Premium photography presentation.
- Consistent spacing and visual hierarchy.

Avoid generic SaaS designs, excessive gradients, excessive shadows, and unnecessary visual effects.

## 4. Language and Typography

- All guest-facing website content must be in Burmese.
- Use Unicode-compatible Burmese fonts.
- Prefer Noto Sans Myanmar or Padauk.
- Ensure proper Burmese line height, wrapping, and spacing.
- English may appear only in technical code identifiers or necessary metadata.

Never generate fake Burmese wedding information.

Use placeholders until actual details are provided.

## 5. Main Features

1. Interactive invitation envelope.
2. Envelope opening animation.
3. Invitation card reveal.
4. Long-scrolling invitation website.
5. Couple introduction.
6. Wedding invitation message.
7. Countdown timer.
8. Wedding reception details.
9. Venue and Google Maps directions.
10. Couple photo gallery.
11. Custom RSVP form.
12. Elegant closing section.

## 6. UX Requirements

- Mobile-first responsive design.
- Support Android, iOS, tablets, and desktop.
- Fast loading.
- Accessible contrast.
- Touch-friendly buttons.
- Reduced-motion support.
- Avoid forced autoplay audio.
- Provide an option to skip the opening animation.
- Important wedding information must be easy to find.

## 7. Architecture and Code Quality

- Use reusable React components.
- Use TypeScript appropriately.
- Prefer server components by default.
- Use client components only when interactivity requires them.
- Separate UI, data, and business logic.
- Keep components readable and focused.
- Avoid unnecessary abstraction.
- Use semantic HTML.
- Validate user input on the server.
- Never expose Supabase service-role credentials.
- Never commit secrets or .env files.

## 8. Development Workflow

Develop incrementally in phases.

Phase 1: Project setup and design system.
Phase 2: Interactive envelope.
Phase 3: Main invitation sections.
Phase 4: RSVP integration.
Phase 5: Optimization, testing, and deployment.

Before starting a phase:
- Inspect the existing project.
- Explain the implementation plan.
- Identify required dependencies.
- Avoid overwriting existing work without explanation.

After each phase:
- Run relevant checks.
- Explain important implementation decisions.
- Summarize modified files.
- Identify the next step.

Do not implement the entire application in one task.

## 9. Important Instruction

Act as a senior frontend engineer and UI/UX designer.

Prioritize a beautiful, polished wedding experience over unnecessary technical complexity.

Do not invent names, dates, venues, photographs, or other personal wedding details.