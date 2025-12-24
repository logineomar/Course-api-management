const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

// READ ONE
router.get('/:title', async (req, res) => {
    const course = await Course.findOne({ title: req.params.title });
    res.json(course);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
});

module.exports = router;
