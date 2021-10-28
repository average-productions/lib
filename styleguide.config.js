const path = require("path");

module.exports = {
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
  require: [
    path.join(__dirname, "src/ui/reset.scss"),
    path.join(__dirname, "src/ui/colors.scss"),
    path.join(__dirname, "src/ui/typography.scss"),
    path.join(__dirname, "src/ui/media.scss"),
  ],

  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Zilla Slab", sans-serif',
      fontSize: "62.5%",
    },
  },
};
