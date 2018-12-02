const concat = require('concat');

(async function build() {
  const files = [
    './dist/SPFxBuilder/runtime.js',
    './dist/SPFxBuilder/polyfills.js',
    './dist/SPFxBuilder/scripts.js',
    './dist/SPFxBuilder/main.js'
  ];
  await concat(files, './dist/SPFxBuilder/bundle.js');
})();
