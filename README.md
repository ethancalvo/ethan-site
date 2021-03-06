# ethan-site

[![Netlify Status](https://api.netlify.com/api/v1/badges/b66da651-b52f-4970-a120-ae45dfeb1eb1/deploy-status)](https://app.netlify.com/sites/ethan-site/deploys)

Here is my about-me site

## Build Process

Javascript is minimal, and will probably use litElements if required.

CSS will use SMACSS. I'm planning to have layout classes written into a style element in head, while referencing all other module and state classes in javascript for rollup to bundle, and inject on load. I've always used scss in the past, but I'm gonna attempt to go without it for this project.

HTML should be pretty standard html5. Nothing special. BUT just so I can process inline css and re-use components across pages, I'm gonna go ahead and use 11ty, 'cause it's awesome.

Build tools should include the following:

- [Rollupjs](https://rollupjs.org)
- [postCSS](https://postcss.org)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [11ty](https://www.11ty.dev)

## TDD and all that

Since I love automation, and tests are automatable. I went ahead and over-engineered this thing so the build process includes testable 11ty bits and pieces. Which is cool, I guess.

Using Jest.

## DEV automation

```bash
npm run dev-build
```

11ty will pop open the default browser to the index page. CSS,JS, and HTML updates will cause a page reload.

- Compiled files go into the "public" directory
- Source files go into the "src" directory
  - 11ty is responsible for processing items in the "html" directory
  - Rollup handles everything in the "js" and "css" directories. The 11ty config is set up to make browsersync reload the browser after rollup dumps updated js into the public/js directory.

## Production build

```bash
npm run build
```
