module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Controller", {
    uniqueId: DataTypes.UUID,
    mac: DataTypes.STRING,
    version: DataTypes.STRING,
    key: DataTypes.STRING,
    lastConnection: DataTypes.DATEONLY
  })
}
