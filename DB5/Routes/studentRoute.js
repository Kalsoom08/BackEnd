const {addStudent, getStudents, getSpecificStudents} = require('../Controller/studentController');
const express = require('express');
const router = express.Router();

router.post('/student', addStudent)
router.get('/students/all', getStudents)
router.get('/students/specific', getSpecificStudents)


module.exports = router