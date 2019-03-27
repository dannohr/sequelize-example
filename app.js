var models = require("./models/index");

models.sequelize
  .sync()
  .then(function() {
    console.log("database sync'd with models");
  })
  .catch(function(err) {
    console.log(err);
    console.log("-----------------------------------------------------");
  });
