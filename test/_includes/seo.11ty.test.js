const seo = require("../../src/html/_includes/seo.11ty");
const stubData = {
  title: "DOOFER",
  url: "https://www.ethancalvert.dev/",
  description: "Here is a description",
  fbImage: "http://www.fillmurray.com/200/400",
  twitterImage: "https:www.fillmurray.com/400/800",
};

test("returns fb title", () => {
  expect(seo(stubData)).toContain(
    `<meta property="og:title" content="${stubData.title}" />`
  );
});

test("returns twitter title", () => {
  expect(seo(stubData)).toContain(
    `<meta name="twitter:title" content="${stubData.title}" />`
  );
});

test("returns meta description", () => {
  expect(seo(stubData)).toContain(
    `<meta name="description" content="${stubData.description}" />`
  );
});

test("returns fb description", () => {
  expect(seo(stubData)).toContain(
    `<meta property="og:description" content="${stubData.description}" />`
  );
});

test("returns twitter description", () => {
  expect(seo(stubData)).toContain(
    `<meta name="twitter:description" content="${stubData.description}" />`
  );
});

test("returns fb url", () => {
  expect(seo(stubData)).toContain(
    `<meta property="og:url" content="${stubData.url}" />`
  );
});

test("returns fb image", () => {
  expect(seo(stubData)).toContain(
    `<meta property="og:image" content="${stubData.fbImage}" />`
  );
});

test("returns twitter image", () => {
  expect(seo(stubData)).toContain(
    `<meta name="twitter:card" content="${stubData.twitterImage}" />`
  );
});

test("returns fb image for twitter if no twitter Image", () => {
  expect(seo({ fbImage: "testString" })).toContain(
    `<meta name="twitter:card" content="testString" />`
  );
});

test("returns twitter image for fb if no fb Image", () => {
  expect(seo({ twitterImage: "testString" })).toContain(
    `<meta property="og:image" content="testString" />`
  );
});

test("returns blank if nothing is passed", () => {
  expect(seo()).toBe("");
});
