import { isNill } from "."

export const setStyleToElement = (
  elementStyles: CSSStyleDeclaration | undefined, 
  css: Partial<CSSStyleDeclaration>
) => {
  if (isNill(elementStyles) || css) {
    console.warn('element dont have a style')
    return
  }

  Object.entries(css).forEach(([key, value]) => {
    elementStyles[key] = value
  })
}
