require('dotenv').config()
require('./database/config/mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const app = express()

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static('./static/'))

app.use(routes)

app.listen(3000, () => {
	console.log('App running on port 3000')
})
