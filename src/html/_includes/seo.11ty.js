module.exports = function ({
  description,
  title,
  url,
  fbImage,
  twitterImage,
} = {}) {
  let metaArray = [];
  let ogArray = [];
  let twitterArray = [];

  if (description) {
    metaArray.push(`<meta name="description" content="${description}" />`);
    ogArray.push(`<meta property="og:description" content="${description}" />`);
    twitterArray.push(
      `<meta name="twitter:description" content="${description.substring(
        0,
        200
      )}" />`
    );
  }

  if (url) {
    ogArray.push(`<meta property="og:url" content="${url}" />`);
  }

  if (title) {
    ogArray.push(`<meta property="og:title" content="${title}" />`);
    twitterArray.push(`<meta name="twitter:title" content="${title}" />`);
  }

  if (fbImage && !twitterImage) {
    twitterImage = fbImage;
  } else if (twitterImage && !fbImage) {
    fbImage = twitterImage;
  }

  if (fbImage && twitterImage) {
    ogArray.push(`<meta property="og:image" content="${fbImage}" />`);
    twitterArray.push(`<meta name="twitter:card" content="${twitterImage}" />`);
  }

  return `${metaArray.join("")}${ogArray.join("")}${twitterArray.join("")}`;
};
