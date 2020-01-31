# Workout-Tracker

a simple application using noSQL database to create and update workouts.

## Overview

This application allows users to input information about a workout series they want. It allows workouts to be updated with various types of information, and is also able to show the user the workouts they have done in a graphic manner, all using MongoDB.

## Functionality

This application makes several calls to the database. When the Dashboard link is clicked, an HTML page is served that uses a PULL request to receive, and then display, the data from previous workouts in a graphic manner. When the New Workout button is clicked, a POST request is triggered that creates a new item with a unique id in the document. Users are then prompted to input various data regarding their workout. Once they are finished, a PUT request updates the workout array in the database associated with the earlier generated id.

### Deployed Link

https://desolate-badlands-42148.herokuapp.com/
