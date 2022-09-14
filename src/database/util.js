const fs = require("fs");

//This method help in writing the data in JSON format coming from the "Workout.js" file
const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = {
  saveToDatabase,
};
