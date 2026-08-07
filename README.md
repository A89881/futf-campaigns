# Abhay Mishra Portfolio

A responsive personal portfolio for Abhay Mishra, built as a Vue single-page application. It presents education, skills, projects, employment and research, community experience, supporting documents, contact details, and the archived Mishra 2025 FUTF campaign.

## What the site includes

- Separate desktop routes for the landing page, resume, projects, experience, appendix, contact, campaign archive, privacy information, and administration.
- A unified, scrollable portfolio on mobile while retaining direct route URLs.
- A resume-only **Work Experience** section that includes employment and research, never volunteering or community roles.
- A filterable experience timeline and a stacked date view for overlapping commitments.
- Optional exact start and end dates in addition to human-readable date labels.
- A light theme with a white base, pink primary accent, and blue secondary accent.
- A dark theme with a near-black base, blue primary accent, and pink secondary accent.
- Firebase Authentication and Firestore-backed experience editing.
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
| Name, biography, education, skills, links, default projects | `src/data/portfolio.js` | Yes: build, commit, and push |
| About-page narrative and its independently translated EN/SV wording | `src/components/AboutStory.vue` | Yes: build, commit, and push |
| About and resume portraits | `src/assets/img/`; imports in `AboutStory.vue`, `ResumePage.vue`, and `LandingPage.vue` | Yes: build, commit, and push |
| Navigation, labels, and other fixed EN/SV interface copy | `src/composables/useLocale.js` | Yes: build, commit, and push |
| Live experience order, dates, descriptions, and translations | `/admin` → Experience editor | Firestore publishes immediately; also export JSON before large changes |
| Permanent fallback experience content | `defaultExperiences` and `experienceTranslations.sv` in `src/data/portfolio.js` | Yes: build, commit, and push |
| Public project visibility and significance order | `/admin` → Project curation | Firestore publishes immediately |
| New project definition, GitHub link, tags, or default visibility | `projects` in `src/data/portfolio.js` | Yes: build, commit, and push |
| Appendix PDF | Redacted file in `public/documents/`, then metadata in `/admin` | Commit/push the PDF first; metadata publishes through Firestore |
| Contact, authentication, or authorization behaviour | Vue code plus `firestore.rules` where applicable | Build/push code; deploy rules separately when changed |
| Historical Mishra 2025 campaign | Preserved snapshot in `public/campaign/`, sourced from Git commit `fae9dda` | Rebuild the snapshot deliberately; never hand-edit generated assets |

Firestore edits are live configuration, while repository seed data is the recovery baseline. After an important admin edit, export the experience JSON and intentionally reconcile any change that should survive a Firestore reset back into `src/data/portfolio.js`.

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
  components/             Shared navigation, sections, timeline, and resume UI
  composables/            Theme and Firestore-backed experience state
  data/portfolio.js       Canonical profile, project, education, and seed content
  pages/                  Route-level views
  firebase.js             Public Firebase client configuration
  router.js               Route table and lazy loading
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
| `/` | Landing page; also renders the complete scrollable portfolio at mobile widths |
| `/about` | Personal background, origins, accelerated education, and life beyond the CV |
| `/resume` | Profile, education, skills, and jobs/research-only Work Experience |
| `/projects` | Selected technical and community projects |
| `/experience` | Professional, research, and community timeline |
| `/appendix` | Supporting documents and publication guidance |
| `/contact` | Email and social links, including Instagram |
| `/campaign/` | Isolated, fully interactive build of the original Mishra 2025 campaign site |
| `/privacy` | Privacy and data-handling information |
| `/admin` | Authenticated experience, project-curation, and appendix editor |

The campaign is an isolated static subsite within the same deployment, not a separate branch or a restyled portfolio component. `public/campaign/` was compiled from the last historical campaign commit, `fae9dda`, using a `/campaign/` base path. Its original pages, wording, navigation, imagery, blue/gold design, and responsive behaviour are preserved. The only source-level compatibility adjustment maps the original contact form to the current validated Firestore field names.

Treat `public/campaign/assets/` as generated archival output. To revise the campaign intentionally, create a temporary worktree from `fae9dda`, make the smallest source change, build it with the current root dependency toolchain and `--base=/campaign/`, then replace the complete snapshot and test `/campaign/`, `/campaign/om-mig`, and `/campaign/kontakt`. Do not mix the portfolio stylesheet into the archive.

GitHub Pages serves the archive directly from its directory index at `/campaign/`; the included `om-mig/` and `kontakt/` directory indexes preserve direct links to the two historical subpages. `public/404.html` remains the fallback for portfolio SPA routes. Keep the redirect/restore scripts when adding or changing portfolio routes, and keep the archive links on `/campaign/` with the trailing slash.

## Editing ordinary portfolio content

Edit `src/data/portfolio.js` for the profile, education, skills, projects, default experiences, documents, and social links. Keep public copy concise and verify names, dates, and URLs against source documents before publishing.

Experience entries use this shape:

```js
{
  id: 'stable-entry-id',
  category: 'professional', // professional, research, or community
  title: 'Role title',
  organisation: 'Organisation',
  location: 'City, Country',
  start: 'September 2025',  // readable fallback label
  end: 'Present',
  startDate: '2025-09',     // required month/year; optional day: 2025-09-01
  endDate: '',              // month/year or exact date; blank means ongoing
  description: 'Polished overview.',
  highlights: ['Specific responsibility or result.'],
  translations: {
    sv: {
      title: 'Svensk rolltitel',
      description: 'Självständig svensk beskrivning.',
      highlights: ['Självständig svensk punkt.']
    }
  }
}
```

Use `YYYY-MM` when only month and year are known, or `YYYY-MM-DD` when the exact day is known. Month and year are required for a starting date; the day is optional. Ongoing entries may leave the ending date blank. The public UI displays dates in day/month/year order when a day exists and month/year otherwise. Only `professional` and `research` categories appear under Resume → Work Experience; `community` remains on the complete Experience page.

English is stored in the top-level `title`, `description`, and `highlights` fields. Swedish is stored separately under `translations.sv`; neither language is generated from or written over the other. Repository-owned Swedish fallbacks for every seed entry live in `experienceTranslations.sv` in `src/data/portfolio.js`. Firestore overrides take priority one field at a time, so an administrator can tune one Swedish description without changing its English counterpart or the other Swedish entries.

## Administration

Use the **Admin** button in the portfolio header or open `/admin`, then authenticate with the verified administrator account. The Experience editor supports optional days with required month/year precision, ordering, import/export, deletion, and restoring repository seed data. Project curation lists the complete GitHub catalogue and lets the administrator show, hide, and reorder entries without deleting their source definitions. The same screen includes an Appendix metadata editor for Git-backed PDF paths and private placeholders. English and Swedish wording are independently editable. Export JSON before substantial experience edits so the current Firestore state can be versioned or recovered.

Firestore is the live source when available. The composable maintains a local cache so public content remains resilient if Firestore is temporarily unavailable. Repository seed data remains the final fallback.

## Firebase Authentication setup

The Firebase web configuration in `src/firebase.js` identifies the public client and is not a secret. Authorization is enforced by Firebase Authentication and `firestore.rules`, not by hiding the API key.

In the Firebase console for project `futf-campaign-forms`:

1. Open **Authentication → Sign-in method** and enable **Email/Password**.
2. Create the administrator user with the email stored in `profile.email` and ensure that account is verified.
3. Use a unique password stored in a password manager; never place it in this repository or a frontend environment variable.
4. Deploy `firestore.rules` before using the editor.

The administration UI intentionally supports email/password authentication only. The application waits for browser-session persistence before signing in and clears the password field after every attempt. Firebase Authentication establishes identity, while Firestore rules independently enforce the exact verified administrator email for writes.

## Firestore and authorization

The site stores experience entries, project visibility/order settings, and appendix metadata in Cloud Firestore. `firestore.rules` permits public reads of those portfolio documents but allows portfolio writes only when all of these are true:

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

The EN/SV switch uses `src/composables/useLocale.js`. It keeps both languages in the same routes and components, stores the preference locally, and updates the document language for assistive technology. This avoids an external translation API, API keys, usage fees, network latency, and accidental transmission of page content.

Fixed interface and project translations live in the central dictionary. Experience and Appendix records additionally support `translations.sv`. Every repository-seeded experience has its own Swedish title, body, and highlights in `experienceTranslations.sv`; the administrator can replace those fields independently in Firestore. Blank Swedish fields first use the repository Swedish fallback and only use English when no Swedish version exists. Editing one language never overwrites the other. Add new fixed phrases to the dictionary and render them through `t(...)`.

## Appendix documents

Appendix PDFs are intentionally Git-backed; Firebase Storage and a Blaze billing account are not required. Use this workflow:

1. Redact the PDF and give it a stable, URL-safe filename such as `course-certificate-2026.pdf`.
2. Copy it into `public/documents/`.
3. Commit and push the file, then wait for the GitHub Pages deployment.
4. In `/admin`, choose **Add document**, enter its metadata and the root-relative path `/documents/course-certificate-2026.pdf`, and optionally add independent Swedish wording.

Private placeholders have no path and do not publish a file. Root-relative PDFs can be previewed in-page, while the toolbar always includes an open-separately fallback for browsers configured to download PDFs. Replacing a document is a normal Git change: replace the file without changing its name, or add a newly named file and update the admin path.

For documents that should exist without relying on Firestore, add their metadata to `appendixDocuments` in `src/data/portfolio.js`. Firestore metadata takes precedence when the live appendix document exists.

## Adding GitHub projects

The complete project catalogue lives in the `projects` array in `src/data/portfolio.js`; public visibility does not remove entries from that catalogue. Use `href` for the primary destination. For a playable web project, point `href` to the live deployment and add a separate `github` property for its source repository. Set `visible: false` for a new entry that should initially be available only in admin.

The administrator can then show/hide projects and reorder them by significance from `/admin`. Firestore stores only the ordered IDs and hidden IDs, so repository content remains version-controlled and newly added catalogue entries automatically appear in the admin list. Add each new fixed English phrase to `src/composables/useLocale.js` so Swedish remains complete.

## Contact submissions

The Contact page writes to the `contactSubmissions` collection in Cloud Firestore with `name`, `email`, `subject`, `message`, and a server timestamp. The website cannot read submissions back. Review them in **Firebase Console → Firestore Database → contactSubmissions** or later connect a trusted server-side notification workflow. Never enable public read access for this collection.

The preserved campaign's original form wrote to a Realtime Database path with the same name. That Realtime Database currently returns HTTP 423 because it has been disabled by its owner, so the maintained portfolio uses Firestore in the same Firebase project instead. This keeps the live form operational without deleting or mutating the old Realtime Database records. If the old database is re-enabled later, export its submissions and migrate them deliberately; do not restore broad anonymous read access.

## Automated deployment

`deploy-pages.yml` runs on pull requests and pushes to both `main` and `New-Design-2026`. It installs the lockfile exactly with `npm ci`, builds the site, uploads `dist/`, and deploys qualifying pushes to GitHub Pages. Pull requests build for validation but never deploy. In **Repository Settings → Pages**, choose **GitHub Actions** as the source. Keep `main` as the long-term release branch; `New-Design-2026` remains included while the redesign is being finalized.

The workflow also exposes **Run workflow** as a recovery control once the workflow file exists on GitHub's default branch. GitHub intentionally suppresses new workflow runs when a push is made with a workflow's built-in `GITHUB_TOKEN`; use a normal user-authenticated Git Bash push, a personal access token/GitHub App intended to trigger workflows, or the manual button for automated commits. A run that fails before the first step with `Failed to resolve action download info: Service Unavailable` is a GitHub Actions service failure rather than a Vite/build error; rerun that job after GitHub recovers.

`public/CNAME` declares `www.mishra.se`. DNS must point the chosen hostname to GitHub Pages, and **Enforce HTTPS** should be enabled after the certificate is available.

The Firebase rules workflow deploys Firestore rules and uses GitHub OIDC rather than a long-lived service-account key. Configure these repository secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

The referenced service account needs only the permissions necessary to deploy Firestore rules. Protect the deployment environment and require review where appropriate. Appendix files require no separate cloud deployment: they are included in the normal GitHub Pages artifact.

## Release checklist

1. Run `npm ci`, `npm audit`, and `npm run build`.
2. Preview the production build and inspect every desktop route.
3. Test the landing page at a mobile width and verify section navigation.
4. Test light and dark themes, keyboard focus, and reduced-motion behaviour.
5. Test administrator email/password sign-in and confirm an unauthorized account cannot publish.
6. Add, edit, reorder, export, and remove a temporary experience entry.
7. Hide/show and reorder a project, then confirm the public Projects page follows the saved curation.
8. Verify the CV, appendix documents, LinkedIn, Instagram, email, and campaign archive links.
9. Check that no private documents, credentials, or service-account files are staged.

## Troubleshooting

- **Blank page after navigation:** confirm the deployment serves `index.html` as the SPA fallback and that the custom-domain configuration is intact.
- **Password sign-in is unavailable:** enable Email/Password under Authentication → Sign-in method and confirm the administrator user exists.
- **Password sign-in fails:** verify the email, reset the password if necessary, and confirm the account email exactly matches `profile.email`.
- **Sign-in succeeds but publishing fails:** deploy the current Firestore rules, verify the user's email, and confirm it exactly matches the administrator email in the rule.
- **Contact form says the database is unavailable:** deploy `firestore.rules`; older live rules deny the contact collection.
- **PDF preview is blank:** confirm the path starts with `/documents/`, verify the filename and capitalization, hard-refresh after deployment, and use **Open separately** if the browser forces PDF downloads.
- **Old experience content appears:** inspect Firestore first, then clear the site's local storage/cache or use **Restore source data** intentionally.
- **Project order or visibility does not save:** deploy `firestore.rules`, confirm the signed-in verified email matches the administrator, and use **Restore defaults** if the saved ID list is stale.
- **A new document returns 404:** ensure it is under `public/`, use a root-relative URL, preserve filename case, and rebuild.
- **No GitHub Actions run appears at all:** confirm the workflow is present on the pushed branch and that the push was user-authenticated rather than made with `GITHUB_TOKEN`. The repository default branch is `main`, so merge the workflow there to make the manual **Run workflow** control consistently available.
- **A Pages run starts but does not deploy:** inspect the Actions run, confirm **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**, and confirm the `github-pages` environment allows the pushed release branch.
- **A run fails before Checkout with `Service Unavailable`:** use **Re-run jobs**. GitHub failed while downloading the action itself; changing application code will not repair that infrastructure outage.

## Ongoing maintenance

Update dependencies in small batches, rebuild after every update, and review Firebase and GitHub security alerts. Keep the CV and structured portfolio content synchronized, export Firestore data before major timeline revisions, and run the release checklist whenever routes, authentication, documents, or deployment settings change.
