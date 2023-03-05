// Importing 'express' router, Project from models folder, withAuth from utils folder/auth.js file.
const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// When an http post request is made, this function is called.
router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    //(200) success.    //(400) error.
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// request to delete Project. Protected by Authorization. asyn (request, response)
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // if projectData not found. Status 404 is sent and running of code ends.
    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
