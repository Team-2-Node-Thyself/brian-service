const Sequelize = require('sequelize');

const sequalize = new Sequelize("general_product_info_prod", "postgres", "Dhhsotnicam1", {host: "localhost", dialect: "postgres"});


module.exports = sequalize;
