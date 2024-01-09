const { app, BrowserWindow } = require('electron');
const express = require('express');
const path = require('path');
const db = require('./database/database');


let mainWindow;
const expressApp = express();

expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'ejs');

expressApp.get('/', async (req, res) => {
  try {
    res.render('index', { pageTitle: 'Electron EJS App' });
  } catch (error) {
    console.error('Error getting main page', error);
    res.status(500).send('Internal Server Error');
  }
});

const startExpressApp = () => {
  expressApp.listen(3000, () => {
    console.log('Express app listening on port 3000');
  });
};

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.webContents.openDevTools();

  // Start Express app after mainWindow is created
  startExpressApp();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

expressApp.get('/styles/index.css', (req, res) => {
  res.type('text/css');
  res.sendFile(path.join(__dirname, 'styles', 'index.css'));
});

expressApp.get('/scripts/script.js', (req, res) => {
  res.type('text/javascript');
  res.sendFile(path.join(__dirname, 'scripts', 'script.js'));
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// return db.any('SELECT * FROM employees')
//     .then(employees => {
//       console.log(employees); // or do something with the data
//     })
//     .catch(error => {
//       console.error('Error fetching employees:', error);
//       throw error; // Rethrow the error if needed
//     });
