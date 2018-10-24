module.exports = (sequelize, DataTypes) =>
{
  const headsUnderProject =
  sequelize.define
  (
  	  'heads_under_project',
    {
     
      project_id : 
      {
        type: DataTypes.INTEGER(),
        primaryKey : true
      },
      head_id :{
        type: DataTypes.INTEGER(),
        primaryKey :true

      },
      fund :DataTypes.DOUBLE(),
      spent:DataTypes.DOUBLE()

    }
  );

  return headsUnderProject;
};