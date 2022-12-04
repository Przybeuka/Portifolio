const Sequelize = require('sequelize');
const db        = require('../db/connection');

const Work = db.define('works', {
    titulo: {
        type: Sequelize.STRING,
    },
    gravata: {
        type: Sequelize.STRING,
    },
    lide: {
        type: Sequelize.STRING,
    },
    link: {
        type: Sequelize.STRING,
    },
    imagem: {
        type: Sequelize.STRING,
    },
    prioridade: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Work