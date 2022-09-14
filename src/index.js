const express = require("express");

const bodyParser = require("body-parser");

const apicache = require("apicache");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const { swaggerDocs: v1SwaggerDocs } = require("./v1/swagger");

const app = express();

const cache = apicache.middleware;

const PORT = process.env.PORT || 3434;

//for testing purpose
// app.get("/",(req,res)=>{
//     res.send("<h2>It's Working!</h2>");
// });

app.use(bodyParser.json());

app.use(cache("2 minutes"));

//Routing all the API call towards "v1/routes/workoutRoutes.js"
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  v1SwaggerDocs(app, PORT);
});
