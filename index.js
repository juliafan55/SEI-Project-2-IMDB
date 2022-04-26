const express = require('express')

const app = express();

const controllers = require('./controllers')

require('./config/db.connection');

const methodOverride = require('method-override')

const PORT = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

app.use('/movies', controllers.movies)


app.get('/', (request, response) => response.send('Welcome to IMDB'))



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))