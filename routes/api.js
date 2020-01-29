const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout.js");
const db = require("../models")

router.post("/api/workouts", (req, res) => {
    // console.log("back end " + body);
    // console.log("back end 1" + {body});
    // console.log("back end2 " + JSON.stringify(body));
   // console.log(req);
  //let testVar = JSON.stringify(req.body);
  //let testVar2 = JSON.parse(testVar);
  //console.log("1: " +testVar)
  //console.log("2: " +testVar2)
    // let exercises = [
    //   {type: req.body.type},
    //   {name: req.body.name},
    //   {weight: req.body.weight},
    //   {sets: req.body.sets},
    //   {reps: req.body.reps},
    //   {duration: req.body.duration}
    // ];
    // let newWork = new db.Workout(exercises);
    // console.log(newWork)
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
    
  //console.log(req.params);
  //console.log (req.body);
  const id = req.params.id ;
    const body = req.body;
  
     const newWorkout = {
    //   //id,
    //   body
     }
  //console.log(newWorkout)
    Workout.findByIdAndUpdate(
      id,
      {$push:{ exercises:body }},
      (err, updatedWorkout) => {
        if (err) {
          res.json({
            newWorkout,
            success: false,
            msg: 'Failed to update Workout'
          })
        } else {
          res.json({newWorkout, success: true, msg: 'Workout added'})
        }
      }
    )
  })


router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req);
    Workout.findById(req.params.id)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });












  module.exports = router;