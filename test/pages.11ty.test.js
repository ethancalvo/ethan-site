const index = require("../src/html/pages.11ty");
const stubData = {
  dataPage: {
    title: "Poo Doofer",
    content: `<div>Here is some sweet, sweet content</div>`,
  },
};

test("returns title", () => {
  expect(new index().render(stubData)).toContain("<title>Poo Doofer</title>");
});

test("returns content", () => {
  expect(new index().render(stubData)).toContain(stubData.dataPage.content);
});
