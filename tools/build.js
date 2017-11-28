
/*eslint-disable no-console */
const  webpack = require('webpack');
const  webpackConfig = require('../webpack.config.js');

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack...');

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('Your app has been compiled in production mode and written to /public.');

  return 0;
});
