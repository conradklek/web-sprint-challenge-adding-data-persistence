const router = require('express').Router();

const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects.map(project => project.project_completed ? { ...project, project_completed: true } : {...project, project_completed: false }));
        })
        .catch(error => {
            next(error);
        });
});

router.get('/:project_id', (req, res, next) => {
    Project.getProjectById(req.params.project_id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            next(error);
        });
});

router.post('/', (req, res, next) => {
    Project.addProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            next(error);
        })
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = router;