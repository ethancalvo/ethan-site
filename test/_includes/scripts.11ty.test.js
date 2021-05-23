const scripts = require("../../src/html/_includes/scripts.11ty");

const stubData = ["main"];

test("returns a string", () => {
  expect(scripts(stubData)).toContain(`main`);
});

test("returns blank string when null passed", () => {
  expect(scripts()).toBe("");
});

test("returns blank string when undefined passed", () => {
  let dt = { name: "hi" };
  expect(scripts(dt.scripts)).toBe("");
});
