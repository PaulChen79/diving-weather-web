require('dotenv').config()
require('./database/config/mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const handlebarsHelpers = require('./helpers/handlebars-helpers')
const routes = require('./routes/index')
const PORT = process.env.PORT || 3000
const app = express()

app.engine(
	'hbs',
	exphbs.engine({ defaultLayout: 'main', extname: '.hbs', helpers: handlebarsHelpers })
)
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(routes)

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
})
