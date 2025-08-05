const User = require('../models/user')

const criarUsuario = async (req, res) => {
  try {
    const { nome, email, telefone, instituicao } = req.body;
    const novoUsuario = await User.create({ nome, email, telefone, instituicao });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = { criarUsuario, listarUsuarios };
