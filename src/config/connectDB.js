const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize('thang99hn', 'root', '123456', {
  host: 'localhost',
  dialect:  'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging:false
});
let connectDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Kết nối DB thành cong');
      } catch (error) {
        console.error('Kết nối thất bại .', error);
    }
}
module.exports = connectDB