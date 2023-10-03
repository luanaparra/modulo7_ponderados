const errorHandler = (err, req, res, next) => {
    let statusCode = 400;
    let message = "An error occurred";
    let details = undefined;

    if (err.msg) {
        message = err.msg;
        details = {
            field: err.param,
            value: err.value
        };
    } else if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        const value = Object.values(err.keyValue)[0];
        message = `An entry with that ${field} (${value}) already exists.`;
        statusCode = 409;
    } else if (err.status === 403) {
        statusCode = 403;
        message = "Forbidden";
    }

    res.status(statusCode).json({ error: { message, details } });
};

module.exports = {
    errorHandler
};

