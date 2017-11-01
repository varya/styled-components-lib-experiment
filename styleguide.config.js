module.exports = {
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    const reactBoilerplateWebConfigFile =  'webpack.' + (env === 'development' ? 'dev' : 'prod' ) + '.babel';
    const reactBoilerplateWebConfig = './internals/webpack/' + reactBoilerplateWebConfigFile;
    return Object.assign(
      {},
      require(reactBoilerplateWebConfig),
      webpackConfig
    );
  },
  components: './app/@(components|Components)/**/*.{js,jsx}',
};
