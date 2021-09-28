module.exports = (sequelize, DataTypes) => {
  const todotable = sequelize.define(
    "todotable",
    {
      idx: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement : true
      },
      content: {
        type:DataTypes.STRING(200),
        unique: false,
        allowNull: false,
      }
    });
  return todotable;
};