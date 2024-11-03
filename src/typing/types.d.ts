declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

interface T_parsedOriginalUrl {
  pathname: string
  search: string
}

declare namespace Express {
  export interface Request {
    _parsedOriginalUrl: T_parsedOriginalUrl
  }
}
