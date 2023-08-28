const { validationResult } = require('express-validator');
const userServices = require('../services/usuario');

const handleErrors = (res, error) => {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
};

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        const registeredUser = await userServices.registerUser(req.body);
        return res.status(201).json({ registeredUser });
    } catch (error) {
        return handleErrors(res, error);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await userServices.login(req.body);
        return res.status(200).json(user);
    } catch (error) {
        return handleErrors(res, error);
    }
};

const getMe = async (req, res, next) => {
    try {
        const me = await userServices.getMe(req.user_id);
        return res.status(200).json(me);
    } catch (error) {
        return handleErrors(res, error);
    }
};

module.exports = {
    registerUser,
    login,
    getMe
};
