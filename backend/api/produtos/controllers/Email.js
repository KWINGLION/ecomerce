module.exports = {
  index: async (ctx) => {
    await strapi.plugins["email"].services.email.send({
      to: "tony@strapi.io",
      from: "tony@strapi.io",
      cc: "helenedarroze@strapi.io",
      bcc: "ghislainearabian@strapi.io",
      replyTo: "annesophiepic@strapi.io",
      subject: "Use strapi email provider successfully",
      text: "Hello world!",
      html: "Hello world!",
    });
    ctx.send("Email send")
  },
};
