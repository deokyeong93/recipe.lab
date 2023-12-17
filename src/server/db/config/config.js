const path = require("path")
const env = () => {
  if (process.env.NODE_ENV !== "production") {
    return `.env.${process.env.NODE_ENV || "development"}`
  }

  return ".env"
}

require("dotenv").config({ path: path.resolve(process.cwd(), env()) })

module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: true,
    },
  },
}
