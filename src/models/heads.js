module.exports = (sequelize, DataTypes) =>
{
  const heads =
  sequelize.define
  (
  	  'heads',
    {
      head_id :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
      name: DataTypes.VARCHAR(45),
      remark: DataTypes.JSON()

    }
  );

  return heads;
};