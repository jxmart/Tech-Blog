const express = require('express')
const routes = require('./controllers')
const path = require('path')
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')
const exphbs = require('express-handlebars')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 3001
const sequelizeStore = require('connect-session-sequelize')(session.Store)
const sess = {
    secret: ''
}