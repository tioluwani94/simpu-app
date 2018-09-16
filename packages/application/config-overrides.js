/* config-overrides.js */
// const rewirePreact = require("react-app-rewire-preact");
const webpack = require("webpack");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const DynamicCDNWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
var _require = require("react-app-rewired"),
  injectBabelPlugin = _require.injectBabelPlugin;
// const rewirePreact = require("react-app-rewire-preact");

function rewirePreload(config, env) {
  config.plugins = [
    ...config.plugins,
    new DynamicCDNWebpackPlugin({
      only: ["react", "react-dom"]
    }),
    new CompressionPlugin({
      test: /\.js/
    }),
    new PreloadWebpackPlugin({
      rel: "preload",
      as: "script"
    })
  ];
  return config;
}

function compileLinkNodeModules(config, env) {
  config.module.rules[1].oneOf[1].include = [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "../components")
  ];
  return config;
}
// function rewireLoadable(config, env) {
//   config.plugins = [
//     ...config.plugins,
//     new ReactLoadablePlugin({
//       filename: path.resolve("../client-flow/src", "react-loadable-stat.json")
//     })
//   ];
//   return injectBabelPlugin("react-loadable/babel", config);
// }

// module.exports = rewireStyledComponents;

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // config = rewirePreact(config, env);
  if (env === "production") {
    console.log("rewire with preload");
    config = rewirePreload(config, env);
    // config = rewireLoadable(config, env);
    config.output = Object.assign(config.output, {
      filename: "static/js/simpu-app/[name].[chunkhash:8].js",
      chunkFilename: "static/js/simpu-app/[name].[chunkhash:8].chunk.js"
    });
  }
  config = compileLinkNodeModules(config, env);
  return config;
};
