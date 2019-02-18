// Deconstructing Router from express using {}
import { Router } from 'express';

// Controller
import MealController from '../controllers/meal.controller';

// Creating an Instance of the router

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteAMeal);
router.put('/:id', MealController.UpdateAMeal);

export default router;
