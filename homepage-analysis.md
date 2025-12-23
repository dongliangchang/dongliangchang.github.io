# Homepage Analysis

## Overview
- **Navigation and header:** Fixed-top navbar with contact icons (email, Google Scholar, GitHub) and links to About, Publications, CV, News, and Chinese homepage. 【F:index.html†L31-L116】
- **Hero section:** Prominent name heading with role/location link to BUPT. 【F:index.html†L131-L137】
- **About summary:** Brief bio with career trajectory, research focus on fine-grained visual understanding and AI security, recruitment note, and contact email. 【F:index.html†L170-L194】
- **Latest News:** Chronological cards highlighting papers, awards, and roles (currently ranging from Jan–Nov 2025 and Jul 2025/2026 entries). 【F:index.html†L212-L385】
- **Footer and scripts:** Copyright notice plus multiple analytics and layout scripts. 【F:index.html†L575-L693】

## Strengths
- Clear, minimalist layout with essential contact links easily discoverable in the header. 【F:index.html†L31-L116】
- Concise career snapshot that quickly communicates current role, past positions, research focus, and recruiting call-to-action. 【F:index.html†L170-L194】
- News section spotlights recent achievements and accepted papers across top venues, showcasing active research output. 【F:index.html†L212-L385】

## Opportunities
- **Future-dated announcements:** Several news items are dated Jul–Nov 2025 and Jul 2026, which could confuse visitors if not yet confirmed. 【F:index.html†L212-L385】
- **Image accessibility:** Profile image lacks descriptive `alt` text, limiting accessibility for screen readers. 【F:index.html†L172-L174】
- **Analytics duplication:** Both `gtag.js` (GA4) and legacy `analytics.js` are loaded; the latter has an empty tracking ID, adding unnecessary network requests. 【F:index.html†L4-L12】【F:index.html†L685-L693】

## Recommendations
- Revisit the news timeline to ensure dates reflect published/verified milestones and consider pinning the latest confirmed updates at the top.
- Add an `alt` attribute to the profile image (e.g., `alt="Portrait of Dongliang Chang"`) to improve accessibility.
- Remove or complete the legacy Google Analytics snippet if GA4 is sufficient, reducing redundant script loads.
- Consider adding a short section or link to selected publications/projects on the landing page to give visitors an immediate sense of current work.
