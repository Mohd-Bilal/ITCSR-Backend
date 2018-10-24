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

  purchaseUnderProject.associate = function(models){
    purchaseUnderProject.belongsTo(models.proposal, {foreignKey: 'project_id', targetKey: 'project_id'});
  }

  purchaseUnderProject.associate = function(models){
    purchaseUnderProject.belongsTo(models.heads, {foreignKey: 'head_id', targetKey: 'head_id'});
  }

  return purchaseUnderProject;
};