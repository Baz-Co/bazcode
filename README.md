# [BazCo.de](https://bazco.de) Source Code
[![Netlify Status](https://api.netlify.com/api/v1/badges/857dcf2e-8d2d-480e-b9f5-465481f0a707/deploy-status)](https://app.netlify.com/sites/infallible-mcclintock-d4edd3/deploys)

Personal website for exploring, integrating, and showcasing different web technologies and paradigms.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=577475091)

<details>
    <summary>Why?</summary>

When learning, there is no replacement for doing.

And a wonderful aspect of software development is once you've done something - it is always done and can be referenced and enhanced.

This website+repo serve as a sandbox, archive, toolbox, and showcase.

</details>

---

[Astro](https://astro.build): Bootstrapped with `create-astro`: `npx create astro`

Added Astro Integrations: `npx astro add react`

- mdx
- react
- tailwind
- image (w/img transformer: sharp)
- sitemap (inactive)
- astro-robots-txt

Each integration has a corresponding package installed as well, check out the repo's [package.json](./package.json) as the package + version source of truth. Additional packages of note:

- astro-icon
- tiny-invariant

Base `./src/layouts/Layout.astro` includes the `GSAP` CDN script:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>`

UI "sugar" components added to this site include:

- a [Starfield component](./src/components/Starfield.astro) utilizing HTML canvas
- A [CodeMirror component](./src/components/CodeMirror.jsx) for an embedded website text editor
- [OAuth 2.0](./src/pages/login.astro) Login utilizing Auth0
- integrated ['react-select' component](./src/components/Select.jsx)

<details>
    <summary>🚀 Project Structure</summary>

This repo follows the same initial layout of the Astro template project.

- `src/components` - Mostly React components (also where we link components to third-party libraries)
- `data/` - Data Models and Mock Data files
- `pages/` - Views for the Project

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── astro-full-logo-dark.png
│   │   └── tailwindcss.svg
│   ├── components/
│   │   ├── about.astro
│   │   ├── CodeMirror.jsx
│   │   ├── LinktreeDisplay.jsx
│   │   ├── Select.jsx
│   │   └── Starfield.astro
│   ├── data/linktree
│   │   ├── frontend-framework.json
│   │   ├── graphql.json
│   │   └── team-surveys.json
│   ├── fonts
│   │   └── OpenDyslexic.otf
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── lt/
│   │   │   ├── index.astro
│   │   │   ├── frontend-frameworks.astro
│   │   │   └── team-surveys.astro
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── login.astro
├── package.json
├── README.md
├── astro.config.mjs
├── robot-txt.config.mjs
├── tailwind.config.js
└── tsconfig.json

```
</details>

<details>
    <summary>🧞 Commands</summary>
All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
| `npm start`            | Starts local dev server at `localhost:3000`        |
| `npm run reset`        | Deletes `node_modules` + `dist` folders and `package-lock.json` file |
</details>

<hr />
<hr />
<hr />

# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
