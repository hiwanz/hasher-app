const path = require('path')
// Interface MakerSquirrelConfig
// https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
module.exports = {
  packagerConfig: {
    icon: './src/img/icon'
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'hasher-app',
        setupIcon: path.join(__dirname, './src/img/icon.ico')
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin',
        'win32'
      ]
    }
  ]
}