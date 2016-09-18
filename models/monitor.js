module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Monitor", {
    name: DataTypes.STRING,
    value: DataTypes.STRING
  })
}
