module.exports = (sequelize, DataTypes) =>
{
  const stocks =
  sequelize.define
  (
    'stocks',
    {
      stock_id:{
        type: DataTypes.INTEGER(),
        primaryKey:true
      },
      date_of_purchase : DataTypes.DATE(),
      name : DataTypes.STRING(45),
      specification : DataTypes.STRING(100)
    }
  );

  return stocks;
};