// Importing 'express' router, Meal from models folder, withAuth from utils folder/auth.js file.
const router = require('express').Router();
const { Meal } = require('../../models');
const withAuth = require('../../utils/auth');

// When an http post request is made, this function is called.
router.post('/', withAuth, async (req, res) => {
  try {
    const newMeal = await Meal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    //(200) success.    //(400) error.
    res.status(200).json(newMeal);
  } catch (err) {
    res.status(400).json(err);
  }
});

// request to delete Meal. Protected by Authorization. asyn (request, response)
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const mealData = await Meal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    // if mealData not found. Status 404 is sent and running of code ends.
    if (!mealData) {
      res.status(404).json({ message: 'No meal found with this id!' });
      return;
    }

    res.status(200).json(mealData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
