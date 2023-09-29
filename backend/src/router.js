const express = require('express');

const router = express.Router();

const tasksController =  require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');



router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask);
router.delete('/tasks/:id', tasksController.delTask);
router.put('/tasks/:id',
  tasksMiddleware.validateBody,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask
);

module.exports = router;