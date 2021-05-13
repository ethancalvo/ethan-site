const nav = require("./_includes/nav.11ty.js");
const fs = require("fs");
const path = require("path");
const seo = require("./_includes/seo.11ty");

module.exports = function (data) {
  let minCSS = "";
  if ("cssMin" in this) {
    minCSS = this.cssMin(
      fs.readFileSync(
        path.resolve(__dirname, "../css/common-inline.css"),
        "utf8"
      )
    );
  }

  let navMenu = "";
  if (data.nav) {
    navMenu = nav(data.nav);
  }

  let bodyContent = "";
  if (data.content) {
    bodyContent = data.content;
  }

  let seoTags = "";
  if (data.seo) {
    seoTags = seo(data.seo);
  }

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${seoTags}
    <title>${data.title}</title>
    <style type="text/css">${minCSS}</style>
  </head>
  <body>
    ${navMenu}
    <div class="content">
      <div class="announcements"></div>
      ${bodyContent}
    </div>

    <div class="footer">Footer</div>
  </body>
  <script src="/js/main.js" type="module"></script>
</html>`;
};
