const express = require('express')

const app = express();

const methodOverride = require('method-override')

const PORT = 4000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))


app.get('/', (request, response) => response.send('Welcome to IMDB'))


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))