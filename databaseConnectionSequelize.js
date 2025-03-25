require('dotenv').config();

const dbConfigLocal = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log("Sequelize Connection String: ", dbConfigLocal);
module.exports = dbConfigLocal;
