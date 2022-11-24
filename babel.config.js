module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"], // existing
    // add the following
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            assets: "./assets",
            components: "./components",
            screens: "./screens",
          },
        },
      ],
    ],
  };
};
