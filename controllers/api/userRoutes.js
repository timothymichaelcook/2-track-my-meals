// Importing {User} model data from /models folder.
const router = require('express').Router();
const { User } = require('../../models');

// Post request to create User.
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router handles post request to login. Login page loads...
// and request is made to find User email in database that matches   email entered.
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    // if userData does not match, then (400)error response is sent.
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // checking match on saved pswrd in records against login password used.
    const validPassword = await userData.checkPassword(req.body.password);

    // if password does not match. (400)error is sent with message.
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // If user is logged in. Save changes to userData id.
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post request to destroy session data when a user logs in and sends a (204) No content response. else (404) Not found status is sent.
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
