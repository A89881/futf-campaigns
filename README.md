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
  appendix/               Safe-to-publish supporting documents
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
| `/resume` | Profile, education, skills, and jobs/research-only Work Experience |
| `/projects` | Selected technical and community projects |
| `/experience` | Professional, research, and community timeline |
| `/appendix` | Supporting documents and publication guidance |
| `/contact` | Email and social links, including Instagram |
| `/campaign` | Mishra 2025 campaign archive within this portfolio |
| `/privacy` | Privacy and data-handling information |
| `/admin` | Authenticated experience editor |

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
  startDate: '2025-09-01',  // optional exact ISO date
  endDate: '',              // optional; blank means ongoing
  description: 'Polished overview.',
  highlights: ['Specific responsibility or result.']
}
```

Use `YYYY-MM-DD` for exact dates. The public UI displays exact dates when present and falls back to `start` and `end` labels otherwise. Only `professional` and `research` categories appear under Resume → Work Experience; `community` remains on the complete Experience page.

## Experience editor

Open `/admin`, authenticate, and use **Add experience** or edit an existing entry. The editor supports exact day inputs, ordering, import/export, deletion, and restoring repository seed data. Export JSON before substantial edits so the current Firestore state can be versioned or recovered.

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

The site stores experience entries in Cloud Firestore. `firestore.rules` permits public reads of the portfolio collection but allows writes only when all of these are true:

- the request is authenticated;
- the Firebase user has a verified email;
- the normalized email matches the configured administrator address.

Deploy rules locally with the Firebase CLI:

```bash
npx firebase-tools login
npx firebase-tools use futf-campaign-forms
npx firebase-tools deploy --only firestore:rules
```

Changing an admin email requires changing both the public profile configuration and the matching rule, then deploying the rule. UI checks are for usability only; never weaken the server-side rule to rely on a hidden route or button.

## Security practices

- Protect the administrator Google account with a passkey or multi-factor authentication.
- Keep Email/Password disabled unless it is actively needed. If enabled, configure Firebase password policy and email-enumeration protection.
- Never commit service-account JSON, refresh tokens, private documents, or `.env` files containing credentials.
- Treat appendix files as public internet content. Redact personal identity numbers, signatures, addresses, QR codes, student identifiers, and private contact details before copying them into `public/appendix/`.
- The CSP in `index.html` is the fallback for GitHub Pages. `public/_headers` adds clickjacking, MIME-sniffing, referrer, and permissions policies on hosting platforms that process `_headers`; GitHub Pages itself does not apply that file.
- Review Firebase Authentication users and Firestore usage periodically.

## Theme maintenance

Theme tokens live at the top of `src/style.css`. Components should use semantic `--primary` and `--secondary` variables for hierarchy, while `--pink` and `--blue` are reserved for places where the literal color identity matters. The chosen theme is persisted by the theme composable, and the toggle remains keyboard accessible.

When adding UI, test both themes and check text contrast, focus outlines, borders, hover states, and canvas visibility.

## Appendix documents

Only commit material approved for public release. Add the sanitized file under `public/appendix/`, then add its metadata and path to the documents data in `src/data/portfolio.js`. Prefer descriptive filenames without spaces. Open the production URL after deployment to confirm the path and PDF rendering.

## Automated deployment

`deploy-pages.yml` runs on pull requests and pushes to `New-Design-2026`. It installs the lockfile exactly with `npm ci`, builds the site, and deploys `dist/` to GitHub Pages for qualifying pushes. In **Repository Settings → Pages**, choose **GitHub Actions** as the source. If the release branch changes to `main`, update the workflow's `on.push.branches` filter.

`public/CNAME` declares `www.mishra.se`. DNS must point the chosen hostname to GitHub Pages, and **Enforce HTTPS** should be enabled after the certificate is available.

The Firestore rules workflow uses GitHub OIDC rather than a long-lived service-account key. Configure these repository secrets:

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`

The referenced service account needs only the permissions necessary to deploy Firestore rules. Protect the deployment environment and require review where appropriate.

## Release checklist

1. Run `npm ci`, `npm audit`, and `npm run build`.
2. Preview the production build and inspect every desktop route.
3. Test the landing page at a mobile width and verify section navigation.
4. Test light and dark themes, keyboard focus, and reduced-motion behaviour.
5. Test Google sign-in on the production hostname and confirm an unauthorized account cannot publish.
6. Add, edit, reorder, export, and remove a temporary experience entry.
7. Verify the CV, appendix documents, LinkedIn, Instagram, email, and campaign archive links.
8. Check that no private documents, credentials, or service-account files are staged.

## Troubleshooting

- **Blank page after navigation:** confirm the deployment serves `index.html` as the SPA fallback and that the custom-domain configuration is intact.
- **Google login says unauthorized domain:** add the exact browser hostname in Firebase Authentication settings.
- **Google provider disabled:** enable Google under Authentication → Sign-in method.
- **Sign-in succeeds but publishing fails:** deploy the current Firestore rules, verify the user's email, and confirm it exactly matches the administrator email in the rule.
- **Old experience content appears:** inspect Firestore first, then clear the site's local storage/cache or use **Restore source data** intentionally.
- **A new document returns 404:** ensure it is under `public/`, use a root-relative URL, preserve filename case, and rebuild.
- **GitHub Pages does not deploy:** inspect the Actions run, confirm Pages uses GitHub Actions, and verify the pushed branch matches the workflow filter.

## Ongoing maintenance

Update dependencies in small batches, rebuild after every update, and review Firebase and GitHub security alerts. Keep the CV and structured portfolio content synchronized, export Firestore data before major timeline revisions, and run the release checklist whenever routes, authentication, documents, or deployment settings change.
