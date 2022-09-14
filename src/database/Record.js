const DB = require("./db.json");

const getRecordForWorkout = (workoutID) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutID);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutID}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getRecordForWorkout,
};
