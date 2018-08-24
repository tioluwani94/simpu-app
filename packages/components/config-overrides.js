/* config-overrides.js */
// const rewirePreact = require("react-app-rewire-preact");
const path = require("path");
// const rewirePreact = require("react-app-rewire-preact");

function compileLinkNodeModules(config, env) {
    config.module.rules[1].oneOf[1].include = [
        path.resolve(__dirname, "src"),
    ];

    return config;
}
// module.exports = rewireStyledComponents;

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    // config = rewirePreact(config, env);
    config = compileLinkNodeModules(config, env);
    // config = rewireStyledComponents(config, env);
    // console.log(JSON.stringify(config, null, 2));
    // config = rewiredEmotionPluginOptions(config, env);
    return config;
};
