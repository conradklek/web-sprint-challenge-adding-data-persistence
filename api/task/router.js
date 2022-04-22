const router = require('express').Router();

const Task = require('./model');

router.get('/:task_id', (req, res, next) => {
    Task.getTaskById(req.params.task_id)
        .then(task_id => {
            res.status(200).json(task_id);
        })
        .catch(error => {
            next(error);
        });
});

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks.map(task => task.task_completed ? { ...task, task_completed: true } : {...task, task_completed: false }))
        })
        .catch(error => {
            next(error);
        });
});

router.post('/', (req, res, next) => {
    const { task_description} = req.body;
    if (!task_description) {
        res.status(400).json({ message: 'Please provide a task description' });
    } else {
        Task.addTask(req.body)
            .then(task => {
                res.status(201).json(task.task_completed ? { ...task, task_completed: true } : {...task, task_completed: false });
            })
            .catch(error => {
                next(error);
            })
    }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router;