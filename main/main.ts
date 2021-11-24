import { app, BrowserWindow, App } from 'electron';
import electronIsDev from 'electron-is-dev';
import * as path from 'path';
import * as url from 'url';

const determineBrowserLocation = (isDev: boolean) => {
  const baseUrl = isDev
    ? 'http://localhost:3000'
    : url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      });
  return `${baseUrl}${isDev ? '/#' : '#'}`;
};

export const isWin = (platform: NodeJS.Platform): boolean =>
  platform === 'win32';

export function createWindow(isDev: boolean): App {
  const win = new BrowserWindow({
    width: 800,
    height: 640,
    minWidth: 360,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  win.loadURL(determineBrowserLocation(isDev));

  win.on('ready-to-show', win.show);

  return app;
}

export function main(): void {
  app.on('ready', () => createWindow(electronIsDev));
}

if (electronIsDev) {
  process.once('SIGUSR2', () => {
    if (app) app.quit();
  });
}

main();
