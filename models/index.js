if (!global.hasOwnProperty('db')) {
  let Sequelize = require('sequelize')

  let dbUrl = process.env.DATABASE_URL ||
              "postgres://homecontrol:homecontrol@localhost:5432/homecontrol"

  let sequelize = new Sequelize(dbUrl)

  global.db = {
    Sequelize:  Sequelize,
    sequelize:  sequelize,
    User:       sequelize.import(__dirname + '/user'),
    Controller: sequelize.import(__dirname + '/controller'),
    Monitor:    sequelize.import(__dirname + '/monitor')
  }

  // Associations
  global.db.Controller.belongsTo(global.db.User)
  global.db.Monitor.belongsTo(global.db.Controller)
  global.db.User.hasMany(global.db.Controller)
  global.db.Controller.hasMany(global.db.Monitor)
}

module.exports = global.db
