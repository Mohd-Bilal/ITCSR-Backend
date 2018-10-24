module.exports = (sequelize, DataTypes) =>
{
  const purchaseUnderProject =
  sequelize.define
  (
  	  'purchase_under_project',
    {
      order_no :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
      project_id : DataTypes.INTEGER(),
      head_id : DataTypes.INTEGER(),
      data: DataTypes.JSON(),
      price: DataTypes.FLOAT(),
      date_of_purchase: DataTypes.DATE(),
      count: DataTypes.INTEGER()
    }
  );

  return purchaseUnderProject;
};