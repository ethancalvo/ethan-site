module.exports = function () {
  return [
    {
      slug: "/",
      title: "Ethan Site",
      content: `<h1>Ethan Calvert</h1>
      <p>Hey, you found my professional site. Thanks for checking it out. If you have questions, hit the form below.</p>
      <form class="m-contact-form" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <div class="m-form-card">
          <label for="name" class="m-form-card_label">Email:</label>
          <input class="m-form-card_input" type="text" id="name" name="name" />        
        
          <label for="message" class="m-form-card_label">Message:</label>
          <textarea class="m-form-card_input" id="message" name="message"></textarea>
        
        <div data-netlify-recaptcha="true"></div>
        
          <button class="m-form-card_submit-button" type="submit">Send</button>
        </div>
      </form>
      `,
      seo: {
        description: "home page",
        title: "SEO title",
      },
      scripts: ["main"],
    },
  ];
};
