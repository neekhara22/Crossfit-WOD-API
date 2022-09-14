const express = require("express");
const apicache = require("apicache");

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

/**
 * @swagger
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

//Custom made middlewares
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

// Get all Workouts in a JSON format from the database(db.json) --> by calling "workoutController.js" file in the "controllers" folder
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

//Get an existing Workout from the database(db.json) --> by calling "workoutController.js" file in the "controllers" folder
router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

//Create a new Workout in the database(db.json) --> by calling "workoutController.js" file in the "controllers" folder
router.post("/", workoutController.createNewWorkout);

//Update an existing Workout in the database(db.json) --> by calling "workoutController.js" file in the "controllers" folder
router.patch("/:workoutId", workoutController.updateOneWorkout);

//Delete an existing Workout from the database(db.json) --> by calling "workoutController.js" file in the "controllers" folder
router.delete("/:workoutId", workoutController.DeleteOneWorkout);

module.exports = router;
