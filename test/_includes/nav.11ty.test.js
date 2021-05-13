const nav = require("../../src/html/_includes/nav.11ty");

const stubData = [{ title: "Home", url: "/" }];

test("returns a string", () => {
  expect(nav(stubData)).toContain(`<a href="/">Home</a>`);
});
