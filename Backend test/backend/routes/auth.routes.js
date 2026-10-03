const express = require (`express`)
const Router= express.Router ()
const {registrar, login} = require(`./../controllers/auth.controllers`)
const {registerValidator, loginValidator} = require(`./../Validators/auth.validator`)
const validate = require(`./../middlewares/validate.middlewares`)
Router.post(`/registrar`, registerValidator, validate, registrar)
Router.post(`/login`, loginValidator, validate,  login)
module.exports = Router