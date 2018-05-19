const NODE_ENV = process.env.NODE_ENV || 'development'

const DEV_MODE = NODE_ENV === 'development'

const PORT = process.env.PORT || 3000

module.exports = { NODE_ENV, DEV_MODE, PORT }
