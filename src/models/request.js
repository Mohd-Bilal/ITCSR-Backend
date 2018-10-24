module.exports = (sequelize, DataTypes) =>
{
  const request =
  sequelize.define
  (
  	  'request',
    {
      request_id :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
      project_id : DataTypes.INTEGER(),
      head_id : DataTypes.INTEGER(),
      description: DataTypes.STRING(1000),
      price: DataTypes.FLOAT(),
      date: DataTypes.DATE(),
      approval_level: DataTypes.INTEGER(),
      estimated_amount :DataTypes.DOUBLE(),
      remark: DataTypes.JSON()

    }
  );

  request.associate = function(models){
    request.belongsTo(models.proposal, {foreignKey: 'project_id', targetKey: 'project_id'});
  }
  request.associate = function(models){
    request.belongsTo(models.heads, {foreignKey: 'head_id', targetKey: 'head_id'});
  }

  return request;
};