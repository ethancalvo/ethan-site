# ethan-site

[![Netlify Status](https://api.netlify.com/api/v1/badges/b66da651-b52f-4970-a120-ae45dfeb1eb1/deploy-status)](https://app.netlify.com/sites/ethan-site/deploys)

Here is my about-me site

## Content

I have this referencing my obsidian notes to pull out jobs content. Obsidian is a pretty nice markdown editor that also lets me get at front-matter. I'm using a symbolic link so I can also edit content with VS Code if I want to.

## Build Process

Javascript is minimal on the front-end.

Typescript is going to be used to build my 11ty.js templates. Why? Because I'm using Sanity at work, and they're requiring typescript, so I'm biting the bullet and using it here to familiarize myself a little more with it.

CSS is just going to be standard CSS. I have my 11ty templates pulling in required stylesheets as required.

HTML should be pretty standard html5. Nothing special. BUT just so I can process inline css and re-use components across pages, I'm gonna go ahead and use 11ty, 'cause it's awesome.

Build tools should include the following:

- [Typescript](https://www.typescriptlang.org/)
- [11ty](https://www.11ty.dev)

If I end up doing some front-end js, I'll use rollup.

## DEV automation

```bash
npm run dev-build
```

11ty will pop open the default browser to the index page. TS, CSS, JS, and HTML updates will cause a page reload.

- Compiled files go into the "public" directory
- Source files go into the "src" directory
  - 11ty is responsible for processing items in the "html" directory
  - If required, rollup will handle everything in the "js" and "css" directories. The 11ty config is set up to make browsersync reload the browser after rollup dumps updated js into the public/js directory.

## Production build

```bash
npm run build
```

## Test deploy to netlify

```bash
npm run deploy
```

## Production deploy to netlify

```bash
npm run prod-deploy
```
