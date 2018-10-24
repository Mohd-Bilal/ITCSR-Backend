module.exports = (sequelize, DataTypes) =>
{
  const people =
  sequelize.define
  (
  	  'people',
    {
      people_id :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
      
      name: DataTypes.VARCHAR(45),
       designation: DataTypes.VARCHAR(45),
      privilege: DataTypes.ENUM(),
      date: DataTypes.DATE(),
      status: DataTypes.TINYINT()

    }
  );

  return people;
};