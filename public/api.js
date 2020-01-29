const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(workoutData) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workoutData)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(workoutData) {
    //console.log("front end 1 "+ workoutData);
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: workoutData,
      headers: { "Content-Type": "application/json" }
    });
    //console.log("front end 2 "+ workoutData);
    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};







