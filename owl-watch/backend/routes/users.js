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

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Deletes any User via _ID

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Updates ALL of User's ID, need to pass all fields to work

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
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

router.route('/update_classes/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(User => {
      
      User.classes = req.body.classes;


      
      User.date = Date.parse(req.body.date);

      User.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


///get classes by Id

router.route('/get_classes/:id').get((req, res) => {
  User.findById(req.params.id)
  .then(users => res.json(users.classes))
  .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;