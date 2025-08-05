const express = require('express');
const router = express.Router();
const { criarUsuario, listarUsuarios } = require('../controllers/userController');

router.post('/', criarUsuario);
router.get('/', listarUsuarios);

module.exports = router;
