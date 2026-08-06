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
  documents/              Git-backed, safe-to-publish appendix PDFs
  AbhayMishraCV-English.pdf
  CNAME                   Custom GitHub Pages domain
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
| `/campaign` | Fully interactive preservation of the original Mishra 2025 campaign site |
| `/privacy` | Privacy and data-handling information |
| `/admin` | Authenticated experience, project-curation, and appendix editor |

The campaign is intentionally a normal subpage. There is no separate campaign deployment or maintenance branch.

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

Open `/admin` and authenticate with the verified administrator account. The Experience editor supports optional days with required month/year precision, ordering, import/export, deletion, and restoring repository seed data. Project curation lists the complete GitHub catalogue and lets the administrator show, hide, and reorder entries without deleting their source definitions. The same screen includes an Appendix metadata editor for Git-backed PDF paths and private placeholders. English and Swedish wording are independently editable. Export JSON before substantial experience edits so the current Firestore state can be versioned or recovered.

Firestore is the live source when available. The composable maintains a local cache so public content remains resilient if Firestore is temporarily unavailable. Repository seed data remains the final fallback.

## Firebase Authentication setup

The Firebase web configuration in `src/firebase.js` identifies the public client and is not a secret. Authorization is enforced by Firebase Authentication and `firestore.rules`, not by hiding the API key.

In the Firebase console for project `futf-campaign-forms`:

1. Open **Authentication → Sign-in method** and enable **Google**. Select a project support email and save.
2. Optionally enable **Email/Password** if password login is required.
3. Open **Authentication → Settings → Authorised domains** and add every real hostname used by the site. At minimum add `www.mishra.se`; also add an apex domain or GitHub Pages hostname if visitors can use either directly.
4. Ensure `localhost` remains authorised for local development.
5. Authenticate once with the administrator Google account and confirm its email is verified.
6. Deploy `firestore.rules` before using the editor.

Google login currently uses Firebase's popup flow with an account chooser. This avoids redirect-flow storage limitations on browsers that partition cross-site storage. If login reports `auth/unauthorized-domain`, the hostname in the error must be added to the authorised-domain list. If it reports `auth/operation-not-allowed`, enable the Google provider. Popup blockers must allow a user-initiated window for the site.

At the time this README was prepared, the project's public Firebase configuration listed only `localhost`, `futf-campaign-forms.firebaseapp.com`, and `futf-campaign-forms.web.app` as authorised domains. Adding `www.mishra.se` is therefore a required console-side step; application code cannot safely grant that permission.

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

- Protect the administrator Google account with a passkey or multi-factor authentication.
- Keep Email/Password disabled unless it is actively needed. If enabled, configure Firebase password policy and email-enumeration protection.
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
5. Test Google sign-in on the production hostname and confirm an unauthorized account cannot publish.
6. Add, edit, reorder, export, and remove a temporary experience entry.
7. Hide/show and reorder a project, then confirm the public Projects page follows the saved curation.
8. Verify the CV, appendix documents, LinkedIn, Instagram, email, and campaign archive links.
9. Check that no private documents, credentials, or service-account files are staged.

## Troubleshooting

- **Blank page after navigation:** confirm the deployment serves `index.html` as the SPA fallback and that the custom-domain configuration is intact.
- **Google login says unauthorized domain:** add the exact browser hostname in Firebase Authentication settings.
- **Google provider disabled:** enable Google under Authentication → Sign-in method.
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
