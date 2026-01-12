const loggerMiddlware = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(`[LOG] ${req.method} ${req.url}`);

    //move to the next middleware / route / controller
    next();
};

module.exports = loggerMiddlware;
