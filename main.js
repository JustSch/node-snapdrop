const {app,BrowserWindow} = require('electron')
if (require('electron-squirrel-startup')) return app.quit();
const server = require('./index');

let mainWindow;

function createWindow () {
  server();
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.setIcon(__dirname + '/public/images/favicon-96x96.png');
  mainWindow.loadURL('http://localhost:3000/');
  mainWindow.on('closed', function () {
    mainWindow = null
  })

}

app.on('ready', createWindow);

app.on('resize', function(e,x,y){
  mainWindow.setSize(x, y);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

