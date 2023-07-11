const path = require('path')
const { app, BrowserWindow } =  require("electron")
const next = require('next')

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV !== 'production';
const createWindow = async() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  console.log(`file:/${path.join(__dirname, 'app/home.html')}`)
  const url = isDev ? `file:/${path.join(__dirname, '../app/home.html')}` : `app://./index.html`;
  mainWindow.loadURL(url);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', async () => {
  console.log(__dirname)
  const nextApp = next({
    dev: isDev,
    dir: `${__dirname}/../renderer`,
  });

  await nextApp.prepare();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})