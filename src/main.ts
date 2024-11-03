import Editor from "./core/Editor";

function initApp () {
  const canvasRef = document.createElement('canvas') 
  const appRef = document.querySelector('#app')
  appRef?.appendChild(canvasRef)
  
  new Editor(canvasRef)
}

initApp()
