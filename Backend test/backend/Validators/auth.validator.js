const {body} = require (`express-validator`);
const passwordValidator = require (`password-validator`)

const registerValidator = [
    body(`nombre`)
    .notEmpty().withMessage(`El nombre es obligatorio`)
    .isLength({min:3}).withMessage(`El nombre debe tener al menos 3 caracteres`),
    
    body(`email`)
    .notEmpty().withMessage(`El email es obligatorio`)
    .isEmail().withMessage(`El email no es válido`)
    .normalizeEmail(),
    
    body(`password`)
    .notEmpty().withMessage(`La contraseña es obligatoria`)
    .isStrongPassword().withMessage(`la contraseña debe ser  valida`)
];

const loginValidator = [
    body(`email`)
    .notEmpty().withMessage(`agrega el email del usuario`)
    .isEmail().withMessage(`el usuario tiene que ser un email valido`),

    body(`password`)
    .notEmpty().withMessage(`por favor agrega una contraseña`)

];


module.exports = {loginValidator, registerValidator};


