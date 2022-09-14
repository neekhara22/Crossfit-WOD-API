const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

// Get all Workouts in a JSON format from the database(db.json) --> by calling "Workout.js" file in the "database" folder
const getAllWorkouts = (filterParams) => {
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

//Get an existing Workout from the database(db.json) --> by calling "Workout.js" file in the "database" folder
const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};

//Create a new Workout in the database(db.json) --> by calling "Workout.js" file in the "database" folder
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

//Update an existing Workout in the database(db.json) --> by calling "Workout.js" file in the "database" folder
const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

//Delete an existing Workout from the database(db.json) --> by calling "Workout.js" file in the "database" folder
const DeleteOneWorkout = (workoutId) => {
  try {
    Workout.DeleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  DeleteOneWorkout,
};
