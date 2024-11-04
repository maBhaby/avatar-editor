export const isNill = (arg: unknown | null | undefined): arg is null | undefined => arg === null || arg === undefined 

export const createMainDiv = () => {
  const mainDiv = document.createElement('div')
  mainDiv.setAttribute('id', 'js-ae-main-div')

  return mainDiv
}
