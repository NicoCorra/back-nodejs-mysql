module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      userName: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };