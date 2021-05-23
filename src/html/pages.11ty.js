const nav = require("./_includes/nav.11ty.js");
const seo = require("./_includes/seo.11ty");
const scripts = require("./_includes/scripts.11ty");

class Page {
  data() {
    return {
      pagination: {
        data: "pages",
        size: 1,
        alias: "dataPage",
      },
      permalink: function (data) {
        return `${data.dataPage.slug}`;
      },
    };
  }

  render(data) {
    let googleFontsUrl =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato&display=swap";
    let minCSS = "";

    if ("cssMin" in this) {
      minCSS = this.cssMin(data.commonCSS.join(" "));
    }

    let navMenu = "";
    if (data.nav) {
      navMenu = nav(data.nav);
    }

    let bodyContent = "No Content";
    if (data.dataPage.content) {
      bodyContent = data.dataPage.content;
    }

    let seoTags = "";
    if (data.dataPage.seo) {
      seoTags = seo(
        Object.assign({ title: data.dataPage.title }, data.dataPage.seo)
      );
    }

    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${seoTags}
    <title>${data.dataPage.title}</title>

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
    <link rel="preload" as="style" href="${googleFontsUrl}"/>
    <link media="print" onload="this.onload=null;this.removeAttribute('media');" href="${googleFontsUrl}" rel="stylesheet"/>
    
    <style type="text/css">${minCSS}</style>
  </head>
  <body>
    ${navMenu}
    <div class="l-content">
      <div class="announcements"></div>
      <div class="body-slot">
      ${bodyContent}
      </div>
    </div>

    <div class="l-footer">Footer</div>
  </body>
  ${scripts(data.dataPage.scripts)}
</html>`;
  }
}

module.exports = Page;
