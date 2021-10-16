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
    .post(createThoughts);

// api/users/id
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughtsById)
    .delete(deleteThoughtsById)


module.exports = router;