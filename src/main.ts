import Editor from "./core/Editor";
import { isNill } from "./lib";

let editorInst: Editor

function initApp () {
  const divRef = document.createElement('div')
  const appRef = document.querySelector('#app')
  appRef?.appendChild(divRef)
  
  editorInst = new Editor(divRef)
}

function initListeners () {
  const userPhotoInput = document.querySelector<HTMLInputElement>('#js-add-img')

  if (!isNill(userPhotoInput)) {
    userPhotoInput.addEventListener('change', () => {
      if (!isNill(userPhotoInput.files) && userPhotoInput.files.length) {
        console.log("File selected: ", userPhotoInput.files[0]);
        editorInst.setImageInCanvas(userPhotoInput.files[0])
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initApp()
  initListeners()
})

