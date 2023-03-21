const Sequelize = require('sequelize');
require('dotenv').config()
const config = {
    logging: false
};

const db = new Sequelize(process.env.DATABASE_URL, config);

module.exports = db;
