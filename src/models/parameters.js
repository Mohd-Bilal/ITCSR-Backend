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
      }
        parameter_name : DataTypes.STRING(45)
    }
  );

  return parameters;
};