module.exports = function (scriptArray = []) {
  let scripts = "";

  scripts = scriptArray
    .map((script) => {
      return `<script async type="module" src="/js/${script}.js"></script>`;
    })
    .join("");

  return scripts;
};
