# Cozy Coffles Implementation Plan

This plan follows the project learning mode: make small, understandable changes, explain the concepts as we go, and avoid large finished solutions that are hard to learn from.

## Current Route Pages

- `/` from `app/page.tsx`: starter homepage content exists.
- `/menu` from `app/menu/page.tsx`: empty.
- `/visit` from `app/visit/page.tsx`: starter visit content exists.
- `/contact` from `app/contact/page.tsx`: empty.
- `/about` from `app/about/page.tsx`: empty.
- Shared layout from `app/layout.tsx`: header and navigation exist.
- Global styles from `app/globals.css`: Tailwind import plus basic theme defaults.

## Phase 0: Shared Foundation

Files:

- `app/layout.tsx`
- `app/globals.css`

Goal: make the whole site feel like one warm coffee shop brand before filling every page.

Implementation ideas:

- Create a consistent page width and spacing pattern.
- Improve the header and navigation styling.
- Choose warmer background, text, border, and accent colors.
- Add reusable-looking button and link styles.
- Keep the layout mobile-first and readable.

Learning focus:

- Root layouts in the Next.js App Router.
- Shared UI that wraps every route page.
- Tailwind utilities vs global vanilla CSS.
- Semantic navigation with `nav`, `header`, and accessible labels.

## Phase 1: Menu Page

File:

- `app/menu/page.tsx`

Goal: build the most useful customer page early.

Sections:

- Page intro.
- Coffee drinks.
- Waffles.
- Pastries or snacks.
- Seasonal specials.
- Small notes for dairy alternatives, takeout, and allergies.

Recommended first approach:

- Use static arrays inside the page.
- Render menu items with `.map()`.
- Keep the design simple before extracting components.

Learning focus:

- React arrays and rendering lists.
- The `key` prop.
- Structured content.
- Accessible pricing and item descriptions.

## Phase 2: Visit Page

File:

- `app/visit/page.tsx`

Goal: turn the existing starter page into a real visit-planning page.

Sections:

- Opening intro.
- Hours.
- Address.
- Directions or parking note.
- Seating, Wi-Fi, and takeout notes.
- Best times to visit.
- Simple map placeholder section.

Learning focus:

- Improving existing JSX.
- Grouping related information into sections.
- Mobile-first spacing.
- Responsive two-column layouts.

## Phase 3: Homepage Polish

File:

- `app/page.tsx`

Goal: make the homepage a helpful entry point after the supporting pages have more substance.

Sections:

- Warm hero intro.
- Featured drinks and waffles.
- Quick visit information.
- Short shop story preview.
- Clear calls to action for Menu, Visit, and Contact.

Learning focus:

- Visual hierarchy.
- Next.js `Link` for internal navigation.
- Homepage content strategy.
- Avoiding generic placeholder content.

## Phase 4: Contact Page

File:

- `app/contact/page.tsx`

Goal: give customers clear ways to reach the shop.

Sections:

- Phone, email, and social links.
- Inquiry categories.
- Simple contact form UI.
- Notes for reservations, events, or catering.

Recommended first approach:

- Build the form visually first.
- Do not add real submission behavior yet.
- Use proper labels for every input.

Learning focus:

- HTML forms.
- Accessible labels.
- Input and textarea styling.
- The difference between a visual form and a working form.

## Phase 5: About Page

File:

- `app/about/page.tsx`

Goal: make Cozy Coffles feel local, specific, and memorable.

Sections:

- Short origin story.
- What "Cozy Coffles" means.
- Coffee and waffle philosophy.
- Atmosphere and community.
- Small team or values section.

Learning focus:

- Writing content with structure.
- Semantic sections and headings.
- Readable prose layout.
- When to use images later.

## Phase 6: Metadata and Final Polish

Files:

- `app/layout.tsx`
- `app/page.tsx`
- `app/menu/page.tsx`
- `app/visit/page.tsx`
- `app/contact/page.tsx`
- `app/about/page.tsx`
- `app/globals.css`

Goal: make the site feel complete and consistent.

Implementation ideas:

- Add page-specific `metadata` exports where useful.
- Check heading order on every page.
- Improve mobile spacing.
- Fix copy issues, such as spelling and repeated phrases.
- Consider active navigation styling later with a small Client Component.

Learning focus:

- Next.js Metadata API.
- Server Components by default.
- When a Client Component is actually needed.
- Accessibility and responsive polish.

## Recommended Build Order

1. Shared foundation.
2. Menu page.
3. Visit page.
4. Homepage polish.
5. Contact page.
6. About page.
7. Metadata and final polish.

This order gives the site practical customer value first, then makes the homepage stronger because it can point to pages that are already useful.
