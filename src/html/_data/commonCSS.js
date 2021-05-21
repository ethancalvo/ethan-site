const path = require("path");
const fs = require("fs");

function commonCSS(css) {
  let layoutCSSArray = [
    "common-inline",
    "nav",
    "content",
    "announcements",
    "footer",
  ];
  if (css) {
    layoutCSSArray = css;
  }

  let commonCSSArray = layoutCSSArray.map((fn) => {
    return fs.readFileSync(
      path.resolve(__dirname, `../../css/${fn}.css`),
      "utf8"
    );
  });

  return commonCSSArray;
}

module.exports = commonCSS;
