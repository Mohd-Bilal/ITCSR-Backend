module.exports = (sequelize, DataTypes) =>
{
  const parameters =
  sequelize.define
  (
    'parameters',
    {
      head_id :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
      parameter_id:
      {
        type        : DataTypes.INTEGER(),
        primaryKey: true
      },
        parameter_name : DataTypes.STRING(45)
    }
  );

  parameters.associate = function(models){
    parameters.belongsTo(models.heads, {foreignKey: 'head_id', targetKey: 'head_id'});
  }

  return parameters;
};