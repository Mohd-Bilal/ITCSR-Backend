module.exports = (sequelize, DataTypes) =>
{
  const parameters_under_heads=
  sequelize.define
  (
    'parameters_under_heads',
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

  parameters_under_heads.associate = function(models){
    parameters_under_heads.belongsTo(models.heads, {foreignKey: 'head_id', targetKey: 'head_id'});
  }

  return parameters_under_heads;
};