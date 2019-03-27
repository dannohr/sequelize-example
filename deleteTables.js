var models = require("./models/index");

let tables = [
  "Company",
  "Customer",
  "QbSyncLog",
  "Role",
  "Session",
  "User",
  "UserRole"
];

for (let table of tables) {
  models.sequelize
    .query("DROP TABLE " + table)
    .then(([results, metadata]) => {
      console.log(results);
      console.log(metadata);
    })
    .catch(function(err) {
      console.log(err);
    });
}
