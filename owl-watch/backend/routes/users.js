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

router.route('/get_projects/:userid/:classid').get((req, res) => {
  User.findById(req.params.userid)
  .then(User => {
    const subDocs = User.$getAllSubdocs()
    const projects = []
    for (let i = 0; i < subDocs.length; i++){
      if (subDocs[i].$parent() != undefined){
        if(subDocs[i].$parent()._id == req.params.classid){
          projects[projects.length] = subDocs[i]
        }
      }
    }
    return res.json(projects)
  })
  .catch(err => res.status(400).json('Error: ' + err));
});


// get classes timeSpent 
// returns [ [className1, timeSpent1], [className2, timeSpent2], ... ] 

router.route('/get_classTime/:userid').get((req, res) => {
  User.findById(req.params.userid)
  .then(User => {
    const classes = User.classes
    const times = []
    for(let i = 0; i < classes.length; i++){

      times[times.length] = [classes[i].className, classes[i].timeSpent]

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
      if(classes[i]._id == req.params.classid){
        return res.json(classes[i])
      }

    }
    
  })
  .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;