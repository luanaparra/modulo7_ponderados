const { validationResult } = require('express-validator');
const userServices = require('../services/users');

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array()[0]);
        }
        const registeredUser = await userServices.registerUser(req.body);
        return res.status(201).json(registeredUser);
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await userServices.login(req.body);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const getMe = async (req, res, next) => {
    try {
        const me = await userServices.getMe(req.user_id);
        res.status(200).json(me);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    registerUser,
    login,
    getMe
};
