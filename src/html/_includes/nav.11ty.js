module.exports = function (navData) {
  let navArray = null;
  if (navData && Array.isArray(navData)) {
    navArray = navData.map((navItem, idx) => {
      return `<a href="${navItem.url}">${navItem.title}</a>`;
    });
  }

  return `
<nav class="nav">
  ${navArray.join("")}
</nav>`;
};
