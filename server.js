// DEPENDENCIES
const express = require('express');
const marsMissions = require('./models/marsMissions');
const app = express();

//Set View engine
app.set('view engine' , 'ejs');
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// views/missions folder has not been created

// PORT
const port = 3000;

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/missions' , (req,res) => {
  res.render('./missions/indexMission' , {
    marsMissions: marsMissions,
  });
  // res.send('hi')
});


// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/missions/:marsMissionsIndex' , (req,res) => {
  const marsMissionsIndex = req.params.marsMissionsIndex;
  const marsMission = marsMissions[marsMissionsIndex];

  res.render('./missions/show' , {
    marsMissions: marsMission,
  });
});

app.get('/' , (req,res) => {
  res.render('index' , {
    marsMissions: marsMissions,
  });
})
// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
