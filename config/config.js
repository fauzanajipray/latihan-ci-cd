
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: parseInt(process.env.DB_PASSWORD),
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        dialect: "postgres"
    },
    test: {
        username: "postgres",
        password: "123",
        database: "db_user_game",
        host: "127.0.0.1",
        dialect: "postgres"
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        port: parseInt(process.env.PROD_DB_PORT),
        url: `${process.env.PROD_DB_DIALECT}://${process.env.PROD_DB_USERNAME}:${process.env.PROD_DB_PASSWORD}@${process.env.PROD_DB_HOSTNAME}:${process.env.PROD_DB_PORT}/${process.env.PROD_DB_NAME}`,
        dialect: 'postgres',
        dialectOptions: {
          ssl: { 
            require: true,
            rejectUnauthorized: false
          }
        }  
    }
};