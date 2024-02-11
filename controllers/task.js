const  Task= require("../models/Task");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/bad-request");
const NotFoundError = require("../errors/not-found");


const getAllTask = async (req, res) => {
    
    const tasks = await Task.find({}).sort("createdAt");
  
    res.status(StatusCodes.OK).json({ tasks, count: tasks.length });
};

const createTask = async (req, res) => {
    // we are setting the createdBy field to the user req from the authentication middleware
    req.body.createdBy = req.user.userId;
  
    const task = await Task.create(req.body);
  
    // console.log(req.user);
  
    res.status(StatusCodes.CREATED).json({ task });
};

const getAllUserTask = async (req, res) => {
    
    // getting the only tasks which are associated with that user 
    const tasks = await Task.find({ createdBy: req.user.userId }).sort("createdAt");
  
    res.status(StatusCodes.OK).json({ tasks, count: tasks.length });
};

const deleteTask = async (req, res) => {

    const {
      user: { userId },
      params: { id: taskId },
    } = req;
  
    const task = await Task.findByIdAndRemove({
      _id : taskId,
      createdBy: userId
    });
  
    if (!task) {
      console.log(task);
      throw new NotFoundError(`No job found with id ${taskId} `);
    }
  
    res.status(StatusCodes.OK).json({msg:`Task with id ${taskId} deleted successfully !`});
  
};

module.exports = {
    getAllTask,
    createTask,
    getAllUserTask,
    deleteTask
};