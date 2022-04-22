const router = require('express').Router();

const Resource = require('./model');

router.get('/:resource_id', (req, res, next) => {
    Resource.getResourceById(req.params.resource_id)
        .then(resource_id => {
            res.status(200).json(resource_id);
        })
        .catch(error => {
            next(error);
        });
});

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            next(error);
        });
});

router.post('/', (req, res, next) => {
    Resource.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
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