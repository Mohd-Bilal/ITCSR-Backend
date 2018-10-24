module.exports = (sequelize, DataTypes) =>
{
  const headsUnderProject =
  sequelize.define
  (
  	  'heads_under_project',
    {
     
      project_id : DataTypes.INTEGER(),
      head_id : DataTypes.INTEGER(),
      fund :DataTypes.DOUBLE(),
      spent:DataTypes.DOUBLE()

    }
  );

  return headsUnderProject;
};