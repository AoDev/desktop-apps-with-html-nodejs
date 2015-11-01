var app = require('app')
var BrowserWindow = require('browser-window')
var isDevelopment = process.env.NODE_ENV === 'development'

// Report crashes to our server.
require('crash-reporter').start()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var win = null

// Quit when all windows are closed.
app.on('window-all-closed', function quit() {
  app.quit()
})

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function init() {

  win = new BrowserWindow({ width: 960, height: 600 })
  win.loadUrl('file://' + __dirname + '/index.html')

  // Open the devtools.
  if (isDevelopment) {
    win.openDevTools()
  }

  // Emitted when the window is closed.
  win.on('closed', function cleanWindow() {
    win = null
  })
})
