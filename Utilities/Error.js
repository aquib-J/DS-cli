
class CustomError extends Error{
    constructor(origin, ...custom) {
        super(...custom);
        this.origin = origin;
        this.name = `customError`;
        Error.captureStackTrace(this, CustomError);
    }

}

module.exports = CustomError;