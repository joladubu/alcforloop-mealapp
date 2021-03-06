import MealService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },

  addAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(201);
  },

  getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealService.getAMeal(id);
    return res.json({
      status: 'success',
      data: foundMeal,
    }).status(200);
  },
  deleteAMeal(req, res) {
    const id = req.params.id;
    const removedMeal = MealService.deleteMeal (id);
    return res.json({
      status: 'success',
      data: removedMeal,
    }).status(200);
  },
  UpdateAMeal(req, res) {
    const mealToUpdate = req.body;
    const updatedMeal = MealService.updateMeal(mealToUpdate);
    return res.json({
      status: 'success',
      data: updatedMeal,
    }).status(201);
  }
};

export default MealController;
