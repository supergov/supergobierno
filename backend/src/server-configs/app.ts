/**
 * Archivo principal de configuraciones de la aplicación en el servidor
 */
export const NODE_ENV = process.env.NODE_ENV || 'development'

export const PROD_MODE = NODE_ENV === 'production'

export const DEV_MODE = NODE_ENV === 'development'

export const PORT = process.env.PORT || 5000

export const APP_URL = process.env.URL || 'http://localhost:' + PORT

export const ON_HTTPS = APP_URL.indexOf('https') !== -1
