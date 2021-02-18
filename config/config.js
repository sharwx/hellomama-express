const config = {
  
  "development": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASS,
    "database": "hellomama_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.SQL_USERNAME,
    "password": process.env.SQL_PASS,
    "database": process.env.SQL_DB,
    "host": process.env.SQL_HOST,
    "dialect": "mysql"
  }

}

module.exports = config