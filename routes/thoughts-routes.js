const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughtsById,
    deleteThoughtsById

} = require('../controllers/thoughts-controller')

router
    .route('/')
    .get(getAllThoughts)

// api/thoughts/:commentId
router
    .route('/:id')
    .get(getThoughtsById)

// api/thoughts/:userId
router
    .route('/:id')
    .post(createThoughts)

// api/thoughts/:userid/:commentId
router
    .route('/:userId/:commentId')
    //.post(createThoughts)
    .put(updateThoughtsById)
    .delete(deleteThoughtsById)


module.exports = router;