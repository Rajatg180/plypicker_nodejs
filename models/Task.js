const mongoose = require('mongoose');

const TaskSchema= new mongoose.Schema({
  task:{
    type:String,
    required:[true,'Please provide task'],
    maxLength:30
  },
  status:{
    type : String,
    enum:['Completed','Pending'],
    default:'Pending'
  },
  createdBy :{
    type : mongoose.Types.ObjectId,
    ref:'Usr',
    required:[true,'Please provide the user']
  }
},{timestamps:true});


module.exports = mongoose.model('Task',TaskSchema);