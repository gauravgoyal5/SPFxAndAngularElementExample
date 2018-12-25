const concat = require('concat');

(async function build() {
  const files = [
    './dist/spfxproject/runtime.js',
    './dist/spfxproject/polyfills.js',
    './dist/spfxproject/scripts.js',
    './dist/spfxproject/main.js'
  ];
  await concat(files, './dist/spfxproject/bundle.js');
  
})();
