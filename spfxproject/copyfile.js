const fs = require('fs-extra');

(async function copyFiles () {
    try {
      await fs.copy('./dist/spfxproject/bundle.js', 'E://Git/SPFxAngularElement2/spfxproject-spfx/node_modules/spfxproject/dist/spfxproject/bundle.js');
      console.log('File coppied success!')
    } catch (err) {
      console.error(err)
    }
})();

