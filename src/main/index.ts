import { app, BrowserWindow, globalShortcut, protocol } from 'electron'
import { join } from 'path'
import dotenv from 'dotenv'
import minimist from 'minimist'

// let argv = minimist(process.argv)
import { Window } from './windows'
dotenv.config({ path: join(__dirname, '../../.env') })
function createWindow () {
  let window = new Window();
  window.listen();
  window.createWindows({ isMainWin: true });
  window.createTray();``
//   win.loadFile(path.join(__dirname,'../render/index.html'))
}

app.on("ready", async () => {
  // 编写快捷键 后续再写， 现在有些问题
  globalShortcut.register('CommandOrControl+Shift+i', () => {

  })
  createWindow();
});

app.whenReady().then(() => {
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
