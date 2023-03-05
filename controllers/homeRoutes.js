// Importing {Project} & {User) model data from /models folder.
const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// Http get request at '/' root endpoint. Handles request, send response.
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data to plain javascript so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Serialized data (tranlating data into a format that can be stored, transmitted and reconstructed later).
    // Pass serialized data from projects into homepage template file (rendered) to be viewed if logged into a session. If not logged into session a (500) Internal service error will display.
    res.render('homepage', {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route handler function: Get request to retrieve a project by its id, along with the name of the user who created the project. Using .findyByPk (find by primary key).
router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID, primary key.
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    // Render from view folder -> profile.js file
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect.
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
