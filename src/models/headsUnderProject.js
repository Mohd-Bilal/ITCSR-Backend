module.exports = (sequelize, DataTypes) =>
{
  const headsUnderProject =
  sequelize.define
  (
  	  'heads_under_project',
    {
     
      project_id : {
        type : DataTypes.INTEGER(),
        primaryKey : true
      },
      head_id :{
         type:DataTypes.INTEGER(),
         primaryKey : true
      },
      fund :DataTypes.DOUBLE(),
      spent:DataTypes.DOUBLE()

    }
  );

  headsUnderProject.associate = function(models){
    headsUnderProject.belongsTo(models.heads, {foreignKey: 'head_id', targetKey: 'head_id'});
  }

  headsUnderProject.associate = function(models){
    headsUnderProject.belongsTo(models.proposal, {foreignKey: 'project_id', targetKey: 'project_id'});
  }

  return headsUnderProject;
};