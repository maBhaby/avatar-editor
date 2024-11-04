import { isNill } from "."

export const setStyleToElement = (
  elementStyles: CSSStyleDeclaration | undefined, 
  css: Partial<CSSStyleDeclaration>
) => {
  if (isNill(elementStyles) || isNill(css)) {
    console.warn('element don\'t have a style')
    return
  }

  Object.entries(css).forEach(([key, value]) => {
    // @ts-ignore
    elementStyles[key] = value
  })
}
