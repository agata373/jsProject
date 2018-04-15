module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'songs',
    user: process.env.DB_USER || 'songs',
    password: process.env.DB_PASSWORD || 'songs',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './songs.sqlite'
    }
  }
}
