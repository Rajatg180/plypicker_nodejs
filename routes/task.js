const express =require('express');
const router = express.Router();

const { getAllTask,createTask,getAllUserTask,deleteTask} = require('../controllers/task');
const auth = require('../middleware/authentication');

// create task and get all task route
router.route('/').post(auth,createTask).get(auth,getAllTask);
// get all current users tags
router.route('/currentUserTask').get(auth,getAllUserTask);
// delete task
router.route('/:id').delete(auth,deleteTask);


module.exports=router;