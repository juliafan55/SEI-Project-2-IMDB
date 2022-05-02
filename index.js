//require express
const PORT = process.env.PORT || 4000
const express = require('express')
const app = express();

//for user auth
const session = require ("express-session");
const MongoStore = require ("connect-mongo");
const navLinks = require('./navLinks');

//require controllers
const controllers = require('./controllers')

//connect to database
require('./config/db.connection');

//require to use delete and put
const methodOverride = require('method-override')

//const for port


//middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

//for user auth
app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
        },
    })
);

app.use(navLinks)

//for user auth - stores currentUsr under user variable
app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
  });

//controllers
app.use('/movies', controllers.movies)
app.use('/reviews', controllers.reviews)
app.use("/", controllers.auth)

//redirecting root
app.get('/', (req, res) => {
    res.redirect('/movies')
})

//listen route
app.listen(process.env.PORT, () => console.log(`Listening on port: ${PORT}`))