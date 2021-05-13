const index = require("../src/html/index.11ty");
const stubData = {
  title: "Poo Doofer",
  content: `<div>Here is some sweet, sweet content</div>`,
};

test("returns title", () => {
  expect(index(stubData)).toContain("<title>Poo Doofer</title>");
});

test("returns content", () => {
  expect(index(stubData)).toContain(stubData.content);
});
