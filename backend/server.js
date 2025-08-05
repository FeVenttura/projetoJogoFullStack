const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const User = require('./src/models/user');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/usuarios', userRoutes);

// Conectar ao banco e sincronizar modelos
sequelize.sync()
  .then(() => {
    console.log('Banco sincronizado com sucesso!');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.error('Erro ao conectar ao banco:', err));
