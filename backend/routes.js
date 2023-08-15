const {Router} = require('express');
const {crearAlumno} = require('./controller');
const router = Router();

// req = request, res = response



router.post('/guardar',crearAlumno)

module.exports = router;