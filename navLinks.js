const routes = [
    { href: '/movies', title: "Movies | "},
    { href: "/movies/new", title: "New Movie | " },
    { href: "/reviews", title: "Reviews | " },
    { href: "/logout", title: "Logout" },
    
];

const authRoutes = [
    { href: "/login", title: "Login" },
    { href: "/register", title: "Register" },
];

let navLinks = function navLinks(req, res, next) {
    if (req.session.currentUser) {
        res.locals.routes = routes;
    } else {
        res.locals.routes = authRoutes;
    }
    // locals
    next();
};

module.exports = navLinks