// ロガーユーティリティ - 本番環境ではログを無効化
const isDevelopment = process.env.NODE_ENV === 'development'

export const logger = {
  log: (...args: any[]) => {
    if (isDevelopment) {
      console.log(...args)
    }
  },
  error: (...args: any[]) => {
    if (isDevelopment) {
      console.error(...args)
    }
  },
  warn: (...args: any[]) => {
    if (isDevelopment) {
      console.warn(...args)
    }
  },
  debug: (...args: any[]) => {
    if (isDevelopment) {
      console.debug(...args)
    }
  },
  info: (...args: any[]) => {
    if (isDevelopment) {
      console.info(...args)
    }
  }
}