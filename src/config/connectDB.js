const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('bookingcare-hoidanit', 'root', null, {
    host: 'localhost',
    dialect:
        'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
    logging: false,
});

let connectDB = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((error) => {
            console.log('Connection has been established successfully.');
        });
};

module.exports = connectDB;
