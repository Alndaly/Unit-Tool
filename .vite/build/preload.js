"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("versions",{node:()=>process.versions.node,chrome:()=>process.versions.chrome,electron:()=>process.versions.electron});e.contextBridge.exposeInMainWorld("electron",{startDrag:r=>{e.ipcRenderer.send("ondragstart",r)}});
