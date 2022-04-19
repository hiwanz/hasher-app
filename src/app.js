// Modules to control application life and create native browser window
const { app, BrowserWindow, shell } = require('electron')
const path = require('path')

const createWindow = () => {
  // Quit when installing, see https://www.electronforge.io/config/makers/squirrel.windows#my-app-is-launching-multiple-times-during-install
  if (require('electron-squirrel-startup')) { return app.quit() }
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: false
    }
  })
  // Hide the menu bar
  mainWindow.removeMenu()
  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open links in external browser
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
// Set about panel information
app.setAboutPanelOptions({
  iconPath: 'src/img/icon-64.png',
  credits: 'Thx for s12v\'s work',
  authors: ['hiwanz', 's12v'],
  website: 'https://github.com/hiwanz/hasher-app'
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})
