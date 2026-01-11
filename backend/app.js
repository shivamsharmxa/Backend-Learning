const userRoutes = require('./routes/user.routes');

const app = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url.startWith('/users')) {
        userRoutes(req, res);
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: 'Route not found'
        }));
    }
};

module.exports = app;
