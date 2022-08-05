const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema ({
  projectName: {
    type : String,

  },
  projectTimeSpent: Number
})

const classSchema = new Schema ({
  className: String,
  projects: {
    type: [projectSchema],
    required: false
  },
  classTimeSpent: Number
})

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password : {
      type: String
  },
  gradeyear: { 
    type: String, 
    required: false},
  classes: 
  { type: [classSchema], 
    required: false },
  date: 
  { type: Date, 
    required: false },

}, {
  timestamps: true,
});





const User = mongoose.model('User', userSchema);

module.exports = User;