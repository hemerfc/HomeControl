module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDay: DataTypes.DATEONLY,
    enable: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })
}
