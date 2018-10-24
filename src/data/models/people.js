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
      
      name: DataTypes.STRING(45),
       designation: DataTypes.STRING(45),
      privilege: DataTypes.ENUM("Clerk","Principal Investigator","Principal"),
      date: DataTypes.DATE(),
      status: DataTypes.TINYINT()

    }
  );
  

  return people;
};