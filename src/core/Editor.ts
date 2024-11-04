import { FramingControl } from './Controls'

import {
  DEFAULT_CANVAS_STYLES,
  EMPTY_CANVAS_REF,
} from '../constants'
import { setStyleToElement } from '../lib/setStylesToElement'
import { TEmpty } from '../typing'
import { createMainDiv } from '../lib'
interface IOptions {
  control?: new (editor: Editor) => FramingControl
}

const defaultOptions: IOptions = {
  control: FramingControl
}


class Editor {
  private _ctx: CanvasRenderingContext2D | TEmpty

  private _canvasRef?: HTMLCanvasElement

  private _control: FramingControl

  private _mainContainer: HTMLDivElement

  constructor(container?: HTMLElement, options: IOptions = defaultOptions) {
    if (!container) {
      console.warn(EMPTY_CANVAS_REF)
    }
    console.log('canvas container - ', container)

    this._control = options.control ? new options.control(this) : new FramingControl(this)

    this._initCanvas(container)
    this._initDefaultStyles()
  }

  private _initCanvas = (container?: HTMLElement) => {
    const mainDiv = createMainDiv()
    const canvasRef = document.createElement('canvas')

    mainDiv.appendChild(canvasRef)
    container?.appendChild(mainDiv)

    this._mainContainer = mainDiv
    this._canvasRef = canvasRef
    this._ctx = canvasRef?.getContext('2d')
  }

  private _initDefaultStyles = () => {
    this._canvasRef!.width = 500
    this._canvasRef!.height = 500
    setStyleToElement(
      this._canvasRef?.style,
      DEFAULT_CANVAS_STYLES
    )
  }

  public setImageInCanvas = (file: File) => {
    const url = URL.createObjectURL(file)

    const img = new Image()
    img.src = url
    img.onload = () => {
      const imgWidth = img.width
      const imgHeight = img.height
      const canvasWidth = this._canvasRef!.width
      const canvasHeight = this._canvasRef!.height
      const widthRatio = canvasWidth / imgWidth
      const heightRatio = canvasHeight / imgHeight
      const scaleRatio = Math.min(widthRatio, heightRatio) // Выбираем наименьший коэффициент
      console.log({ canvasWidth, canvasHeight })

      // Вычисляем новые размеры изображения
      const newWidth = imgWidth * scaleRatio
      const newHeight = imgHeight * scaleRatio

      // Центрируем изображение на холсте
      const x = (canvasWidth - newWidth) / 2
      const y = (canvasHeight - newHeight) / 2

      // Очищаем холст и рисуем изображение
      this._ctx!.clearRect(0, 0, canvasWidth, canvasHeight)
      this._ctx!.drawImage(img, x, y, newWidth, newHeight)
    }
  }

  public getCanvas = () => {
    return this._canvasRef
  }

  public getMainContainer = () => {
    return this._mainContainer
  } 
}

export default Editor
