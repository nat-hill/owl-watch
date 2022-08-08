const router = require('express').Router();
let User = require('../models/user.model');


// Look up any user that uses our application

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Add any user that wants to be added

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const gradeyear = req.body.gradeyear;
  const classes = req.body.classes;
  const date = Date.parse(req.body.date);

  const newUser = new User({
      username,
      password,
      gradeyear,
      classes,
      date
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Gets any User via _ID 

router.route('/:userid').get((req, res) => {
  User.findById(req.params.userid)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Gets any User_id via username

router.route('/username/:username').get((req, res) => {
  User.findOne({username: req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// gets classes by username
router.route('/username_classes/:username').get((req, res) => {
  User.find({username: req.params.username})
    .then(users => res.json(users[0].classes))
    .catch(err => res.status(400).json('Error: ' + err));
});




//Deletes any User via _ID

router.route('/:userid').delete((req, res) => {
  User.findByIdAndDelete(req.params.userid)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Updates ALL of User's ID, need to pass all fields to work

router.route('/update/:userid').post((req, res) => {
  User.findById(req.params.userid)
    .then(User => {
      User.username = req.body.username;
      User.password = req.body.password;
      User.gradeyear = req.body.gradeyear;
      User.classes = req.body.classes;


      
      User.date = Date.parse(req.body.date);

      User.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// update classes

router.route('/update_classes/:userid').post((req, res) => {
  User.findById(req.params.userid)
    .then(User => {
      
      User.classes = req.body.classes;


      User.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


///get all classes by user id

router.route('/get_classes/:userid').get((req, res) => {
  User.findById(req.params.userid)
  .then(users => res.json(users.classes))
  .catch(err => res.status(400).json('Error: ' + err));
});


// get projects in class by user and class id
// returns [ProjectSchema]

// THIS DOES NOT WORK RIGHT NOW
// THIS DOES NOT WORK RIGHT NOW
// THIS DOES NOT WORK RIGHT NOW
// router.route('/get_projects/:userid/:classid').get((req, res) => {
//   User.findById(req.params.userid)
//   .then(User => {
//     const subDocs = User.$getAllSubdocs()
//     const projects = []
//     for (let i = 0; i < subDocs.length; i++){
//       if (subDocs[i].$parent() !== undefined){
//         if(subDocs[i].$parent()._id === req.params.classid){
//           projects[projects.length] = subDocs[i]
//         }
//       }
//     }
//     return res.json(projects)
//   })
//   .catch(err => res.status(400).json('Error: ' + err));
// });


// get classes timeSpent 
// returns [ [className1, timeSpent1], [className2, timeSpent2], ... ] 

router.route('/get_classTime/:userid').get((req, res) => {
  User.findById(req.params.userid)
  .then(User => {
    const classes = User.classes
    const times = []
    for(let i = 0; i < classes.length; i++){

      times[times.length] = [classes[i].className, classes[i].classTimeSpent]

    }
    return res.json(times)
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

//get class by user id and class id

router.route('/get_class/:userid/:classid').get((req, res) => {
  User.findById(req.params.userid)
  .then(User => {
    const classes = User.classes
    for(let i = 0; i < classes.length; i++){
      if(classes[i]._id === req.params.classid){
        return res.json(classes[i])
      }
    }
  })
  .catch(err => res.status(400).json('Error: ' + err));
});


// adds project by username and className
router.route('/add_project').post((req, res) => {
  User.updateOne(
    {"username" : req.body.username, "classes.className" : req.body.className},
    {$push: 
      {'classes.$.projects':
        {
          'projectName' : req.body.projectName, 
          'projectTimeSpent' : req.body.projectTimeSpent
        }
      }
    })
    .then(() => res.json(req.body.projectName + " added"))
    .catch(err => res.status(400).json('Error:' + err));
});

// updates a classTimeSpent by projectTimeSpent
router.route('/update_classTimeSpent').post((req,res) => {
  User.updateOne(
    {"username" : req.body.username, "classes.className" : req.body.className},
    {$inc:
      {
       "classes.$.classTimeSpent":  req.body.projectTimeSpent
      }
    }
  )
  .then(() => res.json(req.body.className + " updated"))
  .catch(err => res.status(400).json('Error:' + err))
});




// adds a class by username

router.route('/add_class').post((req, res) => {
  User.updateOne(
    {"username" : req.body.username},
    {$push: 
      {'classes':
        {
          "className": req.body.className,
          "classTimeSpent": 0,
          "projects": []
        }
      }
    }
  )
    .then(() => res.json(req.body.className + " added"))
    .catch(err => res.status(400).json('Error:' + err));
});



// Updates a classes project time 

router.route('/updatetime').post((req, res) => {
  User.updateOne(
    {"username" : req.body.username, "classes.className" : req.body.className, "classes.projects.projectName": req.body.projectName},
    {$set:
      {'projects.$.projectTimeSpent': req.body.projectTimeSpent
        
      }
    })
    .then(() => res.json(req.body.projectName + " updated"))
    .catch(err => res.status(400).json('Error:' + err));
});

// gets all projects of a user to display on cards
// [ [className1, projectName1, projectTimeSpent1], [className2, projectName2, projectTimeSpent2]  ]

router.route('/get_projects/:username').get((req, res) => {
  User.findOne({username: req.params.username})
    .then(user =>  {
      const classes = user.classes
      const projects = []
      for (let i = 0; i < classes.length; i++){
        
        for (let j = 0; j < classes[i].projects.length; j++){
          projects[projects.length] = [classes[i].className, classes[i].projects[j].projectName, classes[i].projects[j].projectTimeSpent]
        }
      }
      return res.json(projects)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




/// gets projects' names in a class
// TODO


// gets projects' timespent in a class
// // returns [ [projectName1, timeSpent1], [projectName2, timeSpent2], ... ] 
// TODO




module.exports = router;