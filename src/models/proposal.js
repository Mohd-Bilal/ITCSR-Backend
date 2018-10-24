module.exports = (sequelize, DataTypes) =>
{
  const proposal =
  sequelize.define
  (
  	  'proposal',
    {
      project_id :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
     
      file_no: DataTypes.VARCHAR(45),
      principal_investigator_id: DataTypes.INTEGER(),
      name:DataTypes.VARCHAR(45),
     data: DataTypes.JSON(),
     start_date:DataTypes.DATE(),
     duration:DataTypes.INTEGER()

    }
  );

  return proposal;
};