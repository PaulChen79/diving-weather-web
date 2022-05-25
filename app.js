require('dotenv').config()
require('./database/config/mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const PORT = process.env.PORT || 3000
const app = express()

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname + '/static'))

app.use(routes)

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})
