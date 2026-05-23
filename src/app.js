const { app, BrowserWindow, shell, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  if (require('electron-squirrel-startup')) { return app.quit() }

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      devTools: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.removeMenu()
  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
  })

  ipcMain.on('window:minimize', () => mainWindow.minimize())
  ipcMain.on('window:maximize', () => {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
  })
  ipcMain.on('window:close', () => mainWindow.close())
}

app.setAboutPanelOptions({
  iconPath: 'src/img/icon-64.png',
  credits: "Thx for s12v's work",
  authors: ['hiwanz', 's12v'],
  website: 'https://github.com/hiwanz/hasher-app'
})

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
