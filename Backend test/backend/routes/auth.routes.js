const express = require (`express`)
const Router= express.Router ()
const registrar = require(`./../controllers/auth.controllers`)
Router.post(`/registrar`, registrar)
module.exports = Router