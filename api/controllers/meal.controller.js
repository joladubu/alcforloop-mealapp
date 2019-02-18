import MealService from '../services/meal.service';
const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },
    addAMeal(req, res) {
        /*
        Expecting json of the following format
        {
            name: "food_name",
            size: "large",
            price: 500
        }
        */
       const newMeal = req.body;
       const createdMeal =  MealService.addMeal(newMeal);
       return res.json({
        status: 'success',
        data: createdMeal
    }).status(201);
    },
    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MealService.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
        }).status(201);
    }
}

export default MealController;