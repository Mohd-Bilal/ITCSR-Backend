

module.exports = (sequelize, DataTypes) =>
{
  const loginCredentials =
  sequelize.define
  (
    'login_credentials',
    {
      people_id :
      {
        type       : DataTypes.INTEGER(),
        primaryKey : true
      },
      username : DataTypes.STRING(127),
      password : DataTypes.STRING(200)
    }
  );

  loginCredentials.associate = function(models){
    loginCredentials.belongsTo(models.people, {foreignKey: 'people_id', targetKey: 'people_id'});
  }
  return loginCredentials;
};

