const electron = require('electron')
const {
    app,
    BrowserWindow
} = electron

let mainWindow

app.on('ready', () => {
    const {
        width,
        height
    } = electron.screen.getPrimaryDisplay().workArea
    mainWindow = new BrowserWindow({
        width,
        height
    })
    mainWindow.loadURL('https://www.google.com')
})