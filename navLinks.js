//routes available for people who are logged in
const routes = [
    { href: '/movies', title: "Movies"},
    { href: "/movies/new", title: "New Movie" },
    { href: "/logout", title: "Logout" },
    
];

//routes available for people who are NOT logged in
const authRoutes = [
    { href: "/login", title: "Login" },
    { href: "/register", title: "Register" },
];

//function - if user is logged in > show routes
//else > show authRoutes
let navLinks = function navLinks(req, res, next) {
    if (req.session.currentUser) {
        res.locals.routes = routes;
    } else {
        res.locals.routes = authRoutes;
    }
    next();
};

module.exports = navLinks