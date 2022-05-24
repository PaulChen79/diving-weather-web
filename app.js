require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.render('index', { APIKey: process.env.GOOGLE_MAP_API_KEY })
})

app.listen(3000, () => {
	console.log('App running on port 3000')
})
