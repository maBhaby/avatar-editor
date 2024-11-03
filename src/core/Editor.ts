import { EMPTY_CANVAS_REF } from "../constants"
import { TEmpty } from "../typing"

class Editor {
  private _ctx: CanvasRenderingContext2D | TEmpty = null

  private _canvasRef: HTMLCanvasElement | TEmpty = null

  constructor(ref?: HTMLCanvasElement) {
    if (!ref) {
      console.warn(EMPTY_CANVAS_REF)
    }
    console.log('canvas ref - ', ref)

    this._canvasRef = ref
    this._ctx = ref?.getContext('2d')
  }

  private _initDefaultStyles () {

  }
}

export default Editor
