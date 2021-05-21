const commonCSS = require("../../src/html/_data/commonCSS");

test("returns an array ", () => {
  expect(Array.isArray(commonCSS(["nav"]))).toBe(true);
});

test("returns an array containing .l-nav", () => {
  expect(commonCSS(["nav"]).join("")).toContain(".l-nav");
});

test("returns an array containing .l-content by default", () => {
  expect(commonCSS().join("")).toContain(".l-content");
});
