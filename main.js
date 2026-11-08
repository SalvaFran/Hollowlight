const {app,BrowserWindow,Menu,shell}=require('electron'),path=require('path'),{autoUpdater}=require('electron-updater');
app.setName('Hollowlight');Menu.setApplicationMenu(null);
const make=()=>{const w=new BrowserWindow({width:1600,height:950,minWidth:1024,minHeight:640,backgroundColor:'#06050c',title:'Hollowlight',autoHideMenuBar:true,webPreferences:{contextIsolation:true,sandbox:true}});
 w.loadFile(path.join(__dirname,'game','index.html'));
 w.webContents.on('before-input-event',(e,i)=>{if(i.type!='keyDown')return;if(i.key=='F11'||i.alt&&i.key=='Enter')w.setFullScreen(!w.isFullScreen());if(i.key=='F12'&&!app.isPackaged)w.webContents.toggleDevTools()});
 w.webContents.setWindowOpenHandler(({url})=>(shell.openExternal(url),{action:'deny'}))};
app.whenReady().then(()=>{make();app.isPackaged&&autoUpdater.checkForUpdatesAndNotify().catch(()=>{});app.on('activate',()=>BrowserWindow.getAllWindows().length||make())});
app.on('window-all-closed',()=>process.platform!='darwin'&&app.quit());
