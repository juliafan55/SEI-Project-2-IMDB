const express = require('express')

const app = express();

const session = require ("express-session");

const MongoStore = require ("connect-mongo");

const controllers = require('./controllers')

require('./config/db.connection');

const methodOverride = require('method-override')

const PORT = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))


app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.Mongodb_url }),
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
        },
    })
);
app.use('/movies', controllers.movies)
app.use('/reviews', controllers.reviews)
app.use("/", controllers.auth)

app.get('/', (request, response) => response.send('Welcome to IMDB'))



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))