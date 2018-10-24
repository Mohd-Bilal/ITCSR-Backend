

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

  return loginCredentials;
};
