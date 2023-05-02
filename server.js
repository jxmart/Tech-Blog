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
    cookies: { maxAge: 36000},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(routes)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Listening'))
})