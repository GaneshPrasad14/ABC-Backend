const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Configure Multer for file upload
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Images only!');
    }
}

// @route   GET /api/projects
// @desc    Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private
router.post('/', protect, upload.single('image'), async (req, res) => {
    const { title, category, location, year, description, services } = req.body;

    if (!req.file) {
        return res.status(400).json({ message: 'Please upload an image' });
    }

    const image = `/${req.file.path.replace(/\\/g, '/')}`; // Normalize path

    try {
        const project = new Project({
            title,
            category,
            location,
            year,
            image,
            description,
            services: services.split(',').map(s => s.trim()), // Ensure services is an array
        });

        const createdProject = await project.save();
        res.status(201).json(createdProject);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Invalid project data' });
    }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private
router.put('/:id', protect, upload.single('image'), async (req, res) => {
    const { title, category, location, year, description, services } = req.body;

    try {
        const project = await Project.findById(req.params.id);

        if (project) {
            project.title = title || project.title;
            project.category = category || project.category;
            project.location = location || project.location;
            project.year = year || project.year;
            project.description = description || project.description;

            if (services) {
                project.services = services.split(',').map(s => s.trim());
            }

            if (req.file) {
                project.image = `/${req.file.path.replace(/\\/g, '/')}`;
            }

            const updatedProject = await project.save();
            res.json(updatedProject);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Invalid project data' });
    }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', protect, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (project) {
            await project.deleteOne();
            res.json({ message: 'Project removed' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
