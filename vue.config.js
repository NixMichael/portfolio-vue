module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@use "@/scss/_colors.scss" as *;`,
        },
      },
    },
  };