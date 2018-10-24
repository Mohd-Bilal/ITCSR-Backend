module.exports = (sequelize, DataTypes) =>
{
  const stocks =
  sequelize.define
  (
    'stocks',
    {
      date_of_purchase : DataTypes.DATE(),
      name : DataTypes.STRING(45),
      specification : DataTypes.STRING(100)
    }
  );

  return stocks;
};