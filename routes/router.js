const {getReq, postReq, putReq, deleteReq} = require('../controllers/tdControl');
const express = require('express');
const router = express.Router();

router.get('/api/todos', getReq);
router.post('/api/todos', postReq);
router.put('/api/todos/:id', putReq);
router.delete('/api/todos/:id', deleteReq);

module.exports = router;