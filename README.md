# Abhay Mishra Portfolio

A responsive personal portfolio for Abhay Mishra, built as a Vue single-page application. It presents education, skills, projects, employment and research, community experience, supporting documents, contact details, and the archived Mishra 2025 FUTF campaign.

## What the site includes

- Separate desktop routes for the landing page, resume, projects, experience, appendix, contact, campaign archive, privacy information, and administration.
- A condensed, resume-first mobile landing page with selected work, projects, leadership, biography, documents, and direct links to every full route.
- A resume-only **Work Experience** section that includes employment and research, never volunteering or community roles.
- A filterable experience timeline and a stacked date view for overlapping commitments.
- Optional exact start and end dates in addition to human-readable date labels.
- Light mode is the first-visit default, with a white base, pink primary accent, and blue secondary accent; an explicit saved theme choice is preserved.
- A dark theme with a near-black base, blue primary accent, and pink secondary accent.
- Firebase Authentication and a Firestore-backed admin CMS for experiences, appendix metadata, and bilingual site copy.
- A private appendix for redacted or safe-to-publish supporting documents.
- An EN/SV language switch backed by one shared localization layer rather than duplicate pages.
- Verified project-source and organisation links, plus in-page PDF previews for local appendix files.
- Firestore-backed project curation: all catalogue entries remain in admin while public visibility and significance order are configurable.
- Automated GitHub Pages builds and an independent Firestore-rules deployment workflow.

## Technology

- Vue 3 using Composition API and single-file components
- Vue Router 4
- Vite 6
- Firebase Authentication and Cloud Firestore
- Lucide icons
- Tailwind CSS tooling, with the visual system primarily implemented in `src/style.css`

Node.js 20 or newer is recommended. The deployment workflow uses Node.js 22.

## Standard content update procedure

Use this sequence for every ordinary portfolio update so repository content, translations, Firestore, and the deployed site do not drift apart:

1. Start from the release branch and install the locked toolchain:

   ```bash
   git switch main
   git pull --ff-only
   npm ci
   ```

2. Edit the correct source of truth using the table below. Do not edit `dist/` or minified files in `public/campaign/assets/`.
3. Update English and Swedish deliberately. Never replace an English field with Swedish text or rely on an automatic translation to become permanent copy.
4. Run `npm run build`, then `npm run preview` and inspect the affected desktop route, the mobile landing page, both themes, and both languages.
5. Review `git diff` and `git status --short`. Confirm that no private appendix file, credential, Firebase token, unredacted identity number, or unrelated local edit is staged.
6. Commit only the intended files and push `main`. The Pages workflow builds and deploys the pushed commit. Confirm the Actions run succeeds and verify the live URL in a fresh/private browser window.

| Content being changed | Source of truth | Deployment needed? |
| --- | --- | --- |
| Existing public wording, biography, education, skills, project copy, and interface labels | `/admin` → Site text editor | Firestore publishes immediately; each language is independent |
| Repository fallback for profile, education, skills, links, and default projects | `src/data/portfolio.js` | Yes: build, commit, and push |
| Repository fallback for the About narrative | `src/data/aboutStory.js` | Yes: build, commit, and push |
| “How I work” repository fallback | `principles` in `src/data/portfolio.js`; Swedish fallback in `src/composables/useLocale.js` | Yes: build, commit, and push |
| About and resume portraits | `src/assets/img/`; imports in `AboutStory.vue`, `ResumePage.vue`, and `MobilePortfolio.vue` | Yes: build, commit, and push |
| Navigation, labels, and other fixed EN/SV fallback copy | `src/composables/useLocale.js` | Yes: build, commit, and push |
| Live experience order, dates, descriptions, and translations | `/admin` → Experience editor | Firestore publishes immediately; also export JSON before large changes |
| Permanent fallback experience content | `defaultExperiences` and `experienceTranslations.sv` in `src/data/portfolio.js` | Yes: build, commit, and push |
| Public project visibility and significance order | `/admin` → Project curation | Firestore publishes immediately |
| New project definition, GitHub/organisation link, or default visibility | `projects` and `organisationLinks` in `src/data/portfolio.js` | Yes: build, commit, and push |
| Appendix PDF | Redacted file in `public/documents/`, then metadata/order in `/admin` | Commit/push the PDF first; metadata publishes through Firestore |
| Contact, authentication, or authorization behaviour | Vue code plus `firestore.rules` where applicable | Build/push code; deploy rules separately when changed |
| Historical Mishra 2025 campaign | Preserved snapshot in `public/campaign/`, sourced from Git commit `fae9dda` | Rebuild the snapshot deliberately; never hand-edit generated assets |

Firestore edits are live configuration, while repository seed data is the recovery baseline. Export an Experience JSON or site-text backup before a large change. Reconcile wording that must survive a Firestore reset into the appropriate repository fallback during planned maintenance.

## Local development

```bash
npm ci
npm run dev
```

Vite prints the local URL, normally `http://localhost:5173`. Other commands:

```bash
npm run build
npm run preview
npm audit
```

`npm run build` writes the production bundle to `dist/`. Do not edit `dist/` directly.

## Project map

```text
src/
  assets/                 Images bundled by Vite
  components/             Shared UI plus the authenticated site-text editor
  composables/            Theme, locale, authentication, and Firestore-backed stores
  data/aboutStory.js      Bilingual repository fallback for the About narrative
  data/portfolio.js       Canonical profile, project, education, and seed content
  pages/                  Route-level views
  firebase.js             Public Firebase client configuration
  router/index.js         Route table and lazy loading
  style.css               Theme tokens and responsive design system
public/
  campaign/               Compiled, isolated snapshot of the original Mishra 2025 site
  documents/              Git-backed, safe-to-publish appendix PDFs
  AbhayMishraCV-English.pdf
  CNAME                   Custom GitHub Pages domain
  404.html                Preserves direct SPA routes on GitHub Pages
  spa-redirect.js         Captures a missing route before returning to index
  spa-restore.js          Restores the captured route before Vue starts
  _headers                Security headers for hosts that support this convention
.github/workflows/
  deploy-pages.yml        Build and GitHub Pages deployment
  deploy-firestore-rules.yml
firebase.json
firestore.rules
```

## Routes and responsive behaviour

| Route | Purpose |
| --- | --- |
| `/` | Desktop hero; at mobile widths, a condensed resume-first index linking to the complete routes |
| `/about` | Personal background, origins, accelerated education, and life beyond the CV |
| `/resume` | Profile, education, skills, and jobs/research-only Work Experience |
| `/projects` | Selected technical and community projects |
| `/experience` | Employment, research, and community timeline |
| `/appendix` | Supporting documents and publication guidance |
| `/contact` | Email and social links, including Instagram |
| `/campaign/` | Isolated, fully interactive build of the original Mishra 2025 campaign site |
| `/privacy` | Privacy and data-handling information |
| `/admin` | Authenticated experience, project, appendix, and site-text editor |

The campaign is an isolated static subsite within the same deployment, not a separate branch or a restyled portfolio component. `public/campaign/` was compiled from the last historical campaign commit, `fae9dda`, using a `/campaign/` base path. Its original pages, wording, navigation, imagery, blue/gold design, and responsive behaviour are preserved. The only source-level compatibility adjustment maps the original contact form to the current validated Firestore field names.

Treat `public/campaign/assets/` as generated archival output. To revise the campaign intentionally, create a temporary worktree from `fae9dda`, make the smallest source change, build it with the current root dependency toolchain and `--base=/campaign/`, then replace the complete snapshot and test `/campaign/`, `/campaign/om-mig`, and `/campaign/kontakt`. Do not mix the portfolio stylesheet into the archive.

GitHub Pages serves the archive directly from its directory index at `/campaign/`; the included `om-mig/` and `kontakt/` directory indexes preserve direct links to the two historical subpages. `public/404.html` remains the fallback for portfolio SPA routes. Keep the redirect/restore scripts when adding or changing portfolio routes, and keep the archive links on `/campaign/` with the trailing slash.

## Editing ordinary portfolio content

Edit `src/data/portfolio.js` for the profile, education, skills, projects, default experiences, documents, and social links. Keep public copy concise and verify names, dates, and URLs against source documents before publishing.

Experience entries use this shape:

```js
{
  id: 'stable-entry-id',
  category: 'employment', // employment, research, or community
  title: 'Role title',
  organisation: 'Organisation',
  organisationHref: 'https://organisation.example/', // optional
  linkHref: 'https://example.com/supporting-page',    // optional related link
  linkLabel: 'Read the project report',               // optional English label
  location: 'City, Country',
  start: 'Sep 2025',        // readable fallback label
  end: 'Present',
  startDate: '2025-09',     // required month/year; optional day: 2025-09-01
  endDate: '',              // month/year or exact date; blank means ongoing
  description: 'Polished overview.',
  highlights: ['Specific responsibility or result.'],
  translations: {
    sv: {
      title: 'Svensk rolltitel',
      linkLabel: 'Läs projektrapporten',
      description: 'Självständig svensk beskrivning.',
      highlights: ['Självständig svensk punkt.']
    }
  }
}
```

Public dates are normalized automatically in both languages. Use structured values such as
`2025-09` or `2025-09-01` whenever possible; the site renders locale-aware abbreviated month
names (for example `Sep 2025` / `sep. 2025` and `May 2025` / `maj 2025`). Days remain optional,
and date ranges use an en dash. Older full-month fallback labels are accepted and normalized at
display time, so existing Firestore records do not need a manual migration.

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | Yes after first save | Stable identity used for editing, timeline anchors, imports, and repository Swedish fallbacks |
| `category` | Yes | `employment`, `research`, or `community`; older category labels are migrated automatically |
| `title` | Yes | English role title |
| `organisation` | Yes | Shared proper name; used to resolve configured organisation links |
| `organisationHref` | No | Per-entry HTTPS link when supplied in source/imported JSON |
| `linkHref` / `linkLabel` | No | Optional HTTPS or root-relative supporting link and its English label; omitted entirely from the public UI when no URL is supplied |
| `location` | No | Shared location string |
| `startDate` | Yes | `YYYY-MM` or `YYYY-MM-DD` |
| `endDate` | For finished entries | Same format as `startDate`; blank for ongoing entries |
| `start` / `end` | Generated by Admin | Human-readable fallback labels used when structured dates are unavailable |
| `description` | Yes in Admin | English body text |
| `highlights` | No | English bullet array; Admin accepts one item per line |
| `translations.sv` | No but recommended | Independent Swedish title, related-link label, description, and highlights |

Use `YYYY-MM` when only month and year are known, or `YYYY-MM-DD` when the exact day is known. Month and year are required for a starting date; the day is optional. Ongoing entries may leave the ending date blank. The public UI displays dates in day/month/year order when a day exists and month/year otherwise. Only `employment` and `research` categories appear under Resume → Work Experience; `community` remains on the complete Experience page.

English is stored in the top-level `title`, `description`, and `highlights` fields. Swedish is stored separately under `translations.sv`; neither language is generated from or written over the other. Repository-owned Swedish fallbacks for every seed entry live in `experienceTranslations.sv` in `src/data/portfolio.js`. Firestore overrides take priority one field at a time, so an administrator can tune one Swedish description without changing its English counterpart or the other Swedish entries.

## Administration

Use the **Admin** button in the header or open `/admin`. Sign in with the verified email/password Firebase account. There is no Google sign-in path. Authentication uses browser-session persistence, so closing the browser session requires signing in again.

The admin page is a lightweight content-management system. It manages four kinds of live configuration:

| Admin area | What it changes | What it does not change |
| --- | --- | --- |
| Experience editor | Complete experience list, order, dates, category, optional related link, and independent EN/SV copy | Repository seed data or uploaded files |
| Project curation | Public visibility and significance order for known projects | New project IDs, destinations, or source definitions |
| Appendix editor | Document metadata, order, public/private status, path, and independent EN/SV wording | The PDF file itself |
| Site text editor | Live EN/SV overrides for catalogued headings, paragraphs, biography, About narrative, education, skills, projects, and interface copy | Repository fallback files or HTML structure |

### Add an experience

1. Select **Add experience**.
2. Choose the category:
   - `employment` appears on the full Experience timeline and Resume → Work Experience;
   - `research` appears in both places;
   - `community` appears only on the full Experience timeline.
3. Enter the English title, organisation, location, description, and optional highlights. Put one highlight on each line.
4. Choose a required start month/year. Add a start day only when the exact day is known.
5. For a finished role, clear **This role is ongoing**, choose an end month/year, and optionally add an exact end day. The editor rejects impossible dates such as 31 February.
6. Enter independently written Swedish title, description, and highlights. These fields are not generated by an API and do not modify the English fields.
7. Select **Save experience**. A successful save writes the complete sanitized list to Firestore and becomes public immediately; no Git push or Pages rebuild is required.
8. Switch the public site between EN and SV and inspect both the full Experience page and Resume page.

Organisation and location are shared fields rather than translated fields. Known organisation names are linked through `organisationLinks` in `src/data/portfolio.js`; a newly typed organisation receives that link only when its spelling exactly matches a configured key. Add or update organisation URLs in source code and deploy normally.

### Edit, order, delete, export, and restore experiences

- **Edit** loads both languages into the same form. Saving preserves them as separate fields.
- **Move up/down** changes display order and immediately republishes the whole list.
- **Delete** removes the entry from the published list after confirmation.
- **Export JSON** downloads the current sanitized list, including stable IDs and Swedish fields. Export before large changes.
- **Import JSON** validates and immediately publishes the imported array. It is a replacement operation, not a merge. Keep a backup first.
- **Restore source data** overwrites the live Firestore list with `defaultExperiences` from `src/data/portfolio.js`. It does not restore a previous Firestore revision.

Experience data is capped at 50 entries. Titles and organisations are required after sanitization. Text is trimmed, field lengths are capped, blank highlights are removed, and no more than 20 highlights per language are retained.

### Curate projects

Project definitions remain version-controlled in `src/data/portfolio.js`. Admin curation stores only two arrays: ordered project IDs and hidden project IDs. Use the visibility control to show/hide a project and the arrow controls to rank projects by significance. **Restore defaults** returns to the source-defined order and `visible` values. Project wording can be overridden in the Site text editor. Adding a new project ID or changing its destination links still requires a source edit, build, commit, and deployment.

### Add an appendix item

The Appendix editor publishes metadata, not binary files:

1. Redact the PDF and copy it to `public/documents/` using a stable, URL-safe, case-sensitive filename.
2. Commit, push, and wait for the Pages deployment so the file URL exists.
3. Select **Add document** in `/admin`.
4. Enter English title, type, date, and description.
5. For a public document, keep **Publicly available** enabled and enter a root-relative path such as `/documents/course-certificate-2026.pdf` or an `https://` URL.
6. Enter any independently written Swedish metadata. A blank Swedish field falls back to its English counterpart.
7. Save and verify both **Preview** and **Open PDF**. Only root-relative files receive the embedded preview button; external HTTPS files still open separately.
8. Use the up/down controls in the Appendix list to place the tabs/documents in the desired public order.

Disable **Publicly available** to create a private placeholder without exposing a file. The sanitizer sets an item to unavailable when it has no valid path, even if the checkbox was selected.

### Edit site wording

1. Open **Site text editor** and search for a recognizable phrase. The list labels each entry as repository text or a live override.
2. Open the segment and edit English and Swedish independently. A blank Swedish override falls back to the repository Swedish wording and then English.
3. Select **Publish wording**. The override is saved in `portfolio/content` and appears without a Git deployment.
4. Select **Use repository fallback** to remove only that segment's override. This does not delete or rewrite source code.

Most stable keys are the original English repository string. Reused text therefore intentionally shares an override. Where identical visible wording has different meanings, the site uses a semantic key instead. For example, `profile.location`, `resume.photoCaption`, and the education-location keys are independent: changing the resume photograph credit does not change location labels elsewhere.

Use **Export text backup** before a broad wording revision. **Import text backup** replaces the complete set of live text overrides; it is not a merge.

### What still requires code or Git

Admin does not upload files, create a new project definition, change image imports, alter route/component layouts, edit security rules, or modify the preserved campaign archive. Those operations remain repository changes and require review, build, commit, and deployment. Keep source fallbacks current for disaster recovery even when Admin owns the live wording.

## Firebase Authentication setup

The Firebase web configuration in `src/firebase.js` identifies the public client and is not a secret. Authorization is enforced by Firebase Authentication and `firestore.rules`, not by hiding the API key.

In the Firebase console for project `futf-campaign-forms`:

1. Open **Authentication → Sign-in method** and enable **Email/Password**.
2. Create the administrator user with the email stored in `profile.email` and ensure that account is verified.
3. Use a unique password stored in a password manager; never place it in this repository or a frontend environment variable.
4. Deploy `firestore.rules` before using the editor.

The administration UI intentionally supports email/password authentication only. The application waits for browser-session persistence before signing in and clears the password field after every attempt. Firebase Authentication establishes identity, while Firestore rules independently enforce the exact verified administrator email for writes.

## Firestore and authorization

The site stores experience entries, project visibility/order settings, appendix metadata, and copy overrides in Cloud Firestore. `firestore.rules` permits public reads of those portfolio documents but allows portfolio writes only when all of these are true:

| Firestore path | Stored shape | Public behavior |
| --- | --- | --- |
| `portfolio/experience` | `{ entries: [...], updatedAt }` | Replaces the complete experience list |
| `portfolio/appendix` | `{ documents: [...], updatedAt }` | Replaces the complete appendix metadata list |
| `portfolio/projects` | `{ order: [...ids], hidden: [...ids], updatedAt }` | Applies order/visibility to the source project catalogue |
| `portfolio/content` | `{ entries: [{ key, en, sv }], updatedAt }` | Applies per-segment live copy overrides; maximum 600 entries |
| `contactSubmissions/{generatedId}` | `{ name, email, subject, message, createdAt }` | Create-only public form target; never publicly readable |

Admin saves use `setDoc`, so each editor publishes its complete sanitized payload rather than one nested record at a time. Reorder, delete, reset, and backup-import actions therefore replace the corresponding document payload. Avoid editing the same area in two admin tabs simultaneously because the last successful write wins.

Public clients subscribe with Firestore `onSnapshot`, so successful admin writes appear without a site rebuild. Stores first try sanitized browser cache where supported, then accept Firestore as authoritative when its snapshot arrives, and retain repository data as the final baseline. Browser caches improve resilience but are not authoritative backups.

The effective source order is:

1. live Firestore data, when the relevant document exists and can be read;
2. a previously sanitized browser cache while Firestore connects or is unavailable;
3. repository defaults from `src/data/portfolio.js`, `src/data/aboutStory.js`, and `src/composables/useLocale.js`.

Use Admin’s Experience JSON export and site-text backup for recoverable snapshots. Appendix and project settings are separate Firestore documents and should be reviewed manually or exported from Firebase before destructive maintenance. Firestore edits are not automatically committed back into Git, so important long-lived changes should also be reconciled into repository seed data.

Authorization requirements for portfolio writes are:

- the request is authenticated;
- the Firebase user has a verified email;
- the normalized email matches the configured administrator address.

The contact form may only create validated documents in `contactSubmissions`; public reads, updates, and deletes are denied. Field types and maximum lengths are checked server-side. The client adds a honeypot and one-minute local cooldown. Enable Firebase App Check and budget alerts for stronger production abuse protection.

Deploy Firestore rules locally with the Firebase CLI:

```bash
npx firebase-tools login
npx firebase-tools use futf-campaign-forms
npx firebase-tools deploy --only firestore:rules
```

Changing an admin email requires changing the public profile configuration and `firestore.rules`, then deploying the rule file. UI checks are for usability only; never weaken server-side rules to rely on a hidden route or button.

## Security practices

- Protect the administrator email account and password manager with multi-factor authentication.
- Configure a strong Firebase password policy and email-enumeration protection for the administrator account.
- Never commit service-account JSON, refresh tokens, private documents, or `.env` files containing credentials.
- Treat appendix files as public internet content. Redact personal identity numbers, signatures, addresses, QR codes, student identifiers, and private contact details before copying them into `public/documents/`.
- The CSP in `index.html` is the fallback for GitHub Pages. `public/_headers` adds clickjacking, MIME-sniffing, referrer, and permissions policies on hosting platforms that process `_headers`; GitHub Pages itself does not apply that file.
- Review Firebase Authentication users and Firestore usage periodically.

## Theme maintenance

Theme tokens live at the top of `src/style.css`. Components should use semantic `--primary` and `--secondary` variables for hierarchy, while `--pink` and `--blue` are reserved for places where the literal color identity matters. The chosen theme is persisted by the theme composable, and the toggle remains keyboard accessible.

When adding UI, test both themes and check text contrast, focus outlines, borders, hover states, and canvas visibility.

## Languages

The site uses a deliberately small custom localization layer rather than the `vue-i18n` package or an online translation API. There is one route/component tree for both languages; switching language changes the copy inside the same UI. No page is duplicated and no content is sent to a translation service.

### Locale state

`src/composables/useLocale.js` owns a module-level `locale` ref:

- supported values are `en` and `sv`;
- the saved browser preference uses local-storage key `abhay-portfolio-locale`;
- a missing or invalid saved value defaults to English;
- changing locale updates `document.documentElement.lang` for assistive technology;
- `t(text)` and `copy(text, swedishFallback, optionalSemanticKey)` first look for an entry in `portfolio/content`; the key is normally the original English source string but may be an explicit semantic key when identical text needs independent editing;
- English mode returns the live `en` override when present, otherwise the repository English source;
- Swedish mode returns the live `sv` override, then an explicit component/data fallback, then `swedish[text]`, then the live English override, then the repository English source.

All override and dictionary lookups are exact and case-sensitive. A stable key remains unchanged even if its live English display is edited in Admin. If a repository-string key later changes, migrate or recreate its Firestore override; semantic keys such as `resume.photoCaption` avoid that coupling. A visible English phrase in Swedish mode normally means the Swedish override/fallback is blank, the phrase was not passed through `t(...)`/`copy(...)`, or the key differs.

### Three localization patterns

The project has three intentional patterns because not all content has the same editing lifecycle.

#### 1. CMS-overridable fixed interface and project copy

Navigation labels, headings, buttons, short descriptions, project titles, project descriptions, and “How I work” copy use English source strings plus the `swedish` dictionary in `src/composables/useLocale.js`:

```vue
<h2>{{ t('How I work') }}</h2>
```

```js
const swedish = {
  'How I work': 'Så arbetar jag',
}
```

The Site text editor can override either language live. If no override exists, changing the Swedish dictionary value changes only Swedish fallback output. Changing the English component/data source changes the repository English fallback and the stable key, so the Swedish dictionary key and any intended Firestore override must be migrated. Source changes require a build and deployment; Admin overrides do not.

#### 2. Complete About-story language objects

The personal About narrative fallback lives in `src/data/aboutStory.js` as complete `aboutStories.en` and `aboutStories.sv` objects. `AboutStory.vue` passes every field through `copy(english, swedishFallback)`, so Swedish can be rewritten naturally and either language can also receive a live Admin override. Editing only one live language does not change the other.

#### 3. Firestore-managed bilingual records

Experience and Appendix records keep English at the top level and Swedish under `translations.sv`. The two values are stored together but remain independent:

```js
{
  title: 'Summer Research Intern',
  description: 'Worked on numerical simulation tooling.',
  highlights: ['Built a reproducible analysis pipeline.'],
  translations: {
    sv: {
      title: 'Sommarforskningspraktikant',
      description: 'Arbetade med verktyg för numeriska simuleringar.',
      highlights: ['Byggde ett reproducerbart analysflöde.'],
    },
  },
}
```

Saving Swedish text does not replace English text, and saving English text does not automatically rewrite Swedish. There is no machine-translation call during save. To revise only Swedish, open the entry, leave the English fields unchanged, edit the Swedish fields, and save.

### Experience fallback rules

When rendering an experience, the public components resolve content as follows:

| Field | English mode | Swedish mode |
| --- | --- | --- |
| `title` | Top-level English `title` | `translations.sv.title`; otherwise dictionary translation of the English title; otherwise English title |
| `description` | Top-level English `description` | `translations.sv.description`; otherwise dictionary translation of the English description; otherwise English description |
| `highlights` | Top-level English array | Non-empty `translations.sv.highlights`; otherwise English highlights |
| `organisation` | Shared value | Same shared value |
| `location` | Shared value | Same shared value |
| exact dates | Formatted with `en-GB` | Formatted with `sv-SE` |

Repository seed entries have another safety layer: `experienceTranslations.sv` in `src/data/portfolio.js` is keyed by stable experience ID. `useExperienceStore.js` injects that Swedish fallback while sanitizing seed or cloud data. Consequently, clearing a Swedish field on a known seed entry causes its repository Swedish fallback to return on save. To change that fallback permanently, update `experienceTranslations.sv`; to override it live, enter explicit Swedish wording in Admin.

For a newly created entry with no repository translation, a blank Swedish title/description falls through to the fixed dictionary and then English. Blank Swedish highlights fall directly back to English highlights. For natural public Swedish, enter all three Swedish fields explicitly.

### Appendix fallback rules

Appendix `title`, `type`, `date`, and `description` use `translations.sv[field]` in Swedish mode. A blank Swedish field next tries the fixed dictionary and finally shows English. Appendix records do not inject `experienceTranslations.sv`; their only repository baseline is `appendixDocuments` in `src/data/portfolio.js` when no Firestore document has taken precedence.

### Adding another language

The current data model is intentionally EN/SV-specific. Adding a third language requires code changes rather than only content entry:

1. allow the new locale in `useLocale.js` and its persistence logic;
2. add a fixed-copy dictionary or replace the custom helper with a scalable message structure;
3. add a new translation object such as `translations.de` to record sanitizers and Admin forms;
4. update every `localized(...)` helper and date formatter;
5. extend `aboutStories` and content overrides with the new language;
6. update Firestore payload validation if stricter nested schemas are added later;
7. test all desktop routes and the unified mobile page.

Do not add an automatic translation API unless its privacy, cost, error handling, caching, and editorial workflow are explicitly designed. The current implementation prioritizes predictable, human-edited wording.

## Appendix documents

Appendix PDFs are intentionally Git-backed; Firebase Storage and a Blaze billing account are not required. Use this workflow:

1. Redact the PDF and give it a stable, URL-safe filename such as `course-certificate-2026.pdf`.
2. Copy it into `public/documents/`.
3. Commit and push the file, then wait for the GitHub Pages deployment.
4. In `/admin`, choose **Add document**, enter its metadata and the root-relative path `/documents/course-certificate-2026.pdf`, and optionally add independent Swedish wording.
5. Use the Appendix up/down controls to set its position. Ordering publishes immediately with the complete metadata list.

Private placeholders have no path and do not publish a file. Root-relative PDFs can be previewed in-page, while the toolbar always includes an open-separately fallback for browsers configured to download PDFs. Replacing a document is a normal Git change: replace the file without changing its name, or add a newly named file and update the admin path.

For documents that should exist without relying on Firestore, add their metadata to `appendixDocuments` in `src/data/portfolio.js`. Firestore metadata takes precedence when the live appendix document exists.

## Adding GitHub projects

The complete project catalogue lives in the `projects` array in `src/data/portfolio.js`; public visibility does not remove entries from that catalogue. Use `href` for the primary destination. For a playable web project, point `href` to the live deployment and add a separate `github` property for its source repository. Set `visible: false` for a new entry that should initially be available only in admin.

The administrator can then show/hide projects and reorder them by significance from `/admin`. Firestore stores only the ordered IDs and hidden IDs, so repository definitions remain version-controlled and newly added catalogue entries automatically appear in the admin list. Project title, period, type, description, CTA, and tags enter the Site text editor catalogue automatically. Add repository Swedish fallbacks to `src/composables/useLocale.js`; alternatively publish independent EN/SV live wording in Admin.

## Contact submissions

The Contact page writes to the `contactSubmissions` collection in Cloud Firestore with `name`, `email`, `subject`, `message`, and a server timestamp. The website cannot read submissions back. Review them in **Firebase Console → Firestore Database → contactSubmissions** or later connect a trusted server-side notification workflow. Never enable public read access for this collection.

The preserved campaign's original form wrote to a Realtime Database path with the same name. That Realtime Database currently returns HTTP 423 because it has been disabled by its owner, so the maintained portfolio uses Firestore in the same Firebase project instead. This keeps the live form operational without deleting or mutating the old Realtime Database records. If the old database is re-enabled later, export its submissions and migrate them deliberately; do not restore broad anonymous read access.

## Automated deployment

`deploy-pages.yml` validates pull requests targeting `main` or `New-Design-2026`, but it deploys only pushes to `main`. It installs the lockfile exactly with `npm ci`, builds the site, uploads `dist/`, and deploys the production artifact to GitHub Pages. Pull requests build for validation but never deploy. In **Repository Settings → Pages**, choose **GitHub Actions** as the source. Treat `main` as the release branch.

The workflow also exposes **Run workflow** as a recovery control once the workflow file exists on GitHub's default branch. GitHub intentionally suppresses new workflow runs when a push is made with a workflow's built-in `GITHUB_TOKEN`; use a normal user-authenticated Git Bash push, a personal access token/GitHub App intended to trigger workflows, or the manual button for automated commits. A run that fails before the first step with `Failed to resolve action download info: Service Unavailable` is a GitHub Actions service failure rather than a Vite/build error; rerun that job after GitHub recovers.

`public/CNAME` declares `www.mishra.se`. DNS must point the chosen hostname to GitHub Pages, and **Enforce HTTPS** should be enabled after the certificate is available.

The Firebase rules workflow deploys Firestore rules and uses GitHub OIDC rather than a long-lived service-account key. Configure these repository secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

`deploy-firestore-rules.yml` currently runs automatically only when `firestore.rules`, `firebase.json`, or that workflow file is pushed to `New-Design-2026`; it can also be started manually with **Run workflow**. An ordinary `main` deployment does not deploy Firestore rules. If the branch trigger is changed, update this paragraph and verify the protected environment before relying on it.

The referenced service account needs only the permissions necessary to deploy Firestore rules. Protect the deployment environment and require review where appropriate. If OIDC is not configured, deploy rules locally with the Firebase CLI command documented above. Appendix files require no separate cloud deployment: they are included in the normal GitHub Pages artifact.

## Release checklist

1. Run `npm ci`, `npm audit`, and `npm run build`.
2. Preview the production build and inspect every desktop route.
3. Test the landing page at a mobile width and verify section navigation.
4. Test light and dark themes, keyboard focus, and reduced-motion behaviour.
5. Test administrator email/password sign-in and confirm an unauthorized account cannot publish.
6. Add, edit, reorder, export, and remove a temporary experience entry.
7. Hide/show and reorder a project, then confirm the public Projects page follows the saved curation.
8. Reorder a temporary Appendix record and verify its preview/open behavior.
9. Override one bilingual text segment, verify both languages, reset it to repository fallback, and test a text export.
10. Verify the CV, appendix documents, LinkedIn, Instagram, email, and campaign archive links.
11. Check that no private documents, credentials, or service-account files are staged.

## Troubleshooting

- **Blank page after navigation:** confirm the deployment serves `index.html` as the SPA fallback and that the custom-domain configuration is intact.
- **Password sign-in is unavailable:** enable Email/Password under Authentication → Sign-in method and confirm the administrator user exists.
- **Password sign-in fails:** verify the email, reset the password if necessary, and confirm the account email exactly matches `profile.email`.
- **Sign-in succeeds but publishing fails:** deploy the current Firestore rules, verify the user's email, and confirm it exactly matches the administrator email in the rule.
- **Site-text publishing is rejected:** the live rules predate `portfolio/content`; deploy the current `firestore.rules` and retry after the workflow completes.
- **Contact form says the database is unavailable:** deploy `firestore.rules`; older live rules deny the contact collection.
- **PDF preview is blank:** confirm the path starts with `/documents/`, verify the filename and capitalization, hard-refresh after deployment, and use **Open separately** if the browser forces PDF downloads.
- **Old experience content appears:** inspect Firestore first, then clear the site's local storage/cache or use **Restore source data** intentionally.
- **Swedish mode shows English for one field:** confirm the record has a non-blank `translations.sv` value. For fixed copy, confirm the component calls `t(...)` and the English source text exactly matches its dictionary key.
- **A cleared Swedish seed translation comes back:** known seed IDs are repopulated from `experienceTranslations.sv` during sanitization. Edit that repository fallback or publish an explicit Swedish override.
- **An admin change appears locally but not elsewhere:** verify the save confirmation, inspect the relevant `portfolio/*` Firestore document, and check `cloudStatus`; browser cache is only a temporary fallback.
- **Project order or visibility does not save:** deploy `firestore.rules`, confirm the signed-in verified email matches the administrator, and use **Restore defaults** if the saved ID list is stale.
- **A live text edit does not affect a phrase:** confirm the public component passes that exact repository phrase through `t(...)` or `copy(...)`. Search the Site text editor by the stable source key, not only the customized display value.
- **A new document returns 404:** ensure it is under `public/`, use a root-relative URL, preserve filename case, and rebuild.
- **No GitHub Actions run appears at all:** confirm the workflow is present on the pushed branch and that the push was user-authenticated rather than made with `GITHUB_TOKEN`. The repository default branch is `main`, so merge the workflow there to make the manual **Run workflow** control consistently available.
- **A Pages run starts but does not deploy:** inspect the Actions run, confirm **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**, and confirm the `github-pages` environment allows the pushed release branch.
- **A run fails before Checkout with `Service Unavailable`:** use **Re-run jobs**. GitHub failed while downloading the action itself; changing application code will not repair that infrastructure outage.

## Ongoing maintenance

Update dependencies in small batches, rebuild after every update, and review Firebase and GitHub security alerts. Keep the CV and structured portfolio content synchronized, export Firestore data before major timeline revisions, and run the release checklist whenever routes, authentication, documents, or deployment settings change.
