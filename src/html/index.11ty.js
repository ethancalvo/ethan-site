const nav = require("./_includes/nav.11ty.js");
const fs = require("fs");
const path = require("path");

module.exports = function (data) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Ethan Calvert's pro page" />
    <title>Ethan Calvert</title>
    <style type="text/css">${this.cssMin(
      fs.readFileSync(
        path.resolve(__dirname, "../css/common-inline.css"),
        "utf8"
      )
    )}</style>
  </head>
  <body>
    ${nav}
    <div class="content">
      <div class="announcements"></div>
      <h1>Ethan Calvert</h1>
    </div>

    <div class="footer">Footer</div>
  </body>
  <script src="/js/main.js" type="module"></script>
</html>`;
};
