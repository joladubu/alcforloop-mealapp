import MealService from '../services/meal.service';
const MenuController = {
    getMenu(req, res) {
        const dayMenu = MenuService.getMenu();
        return res.json({
            status: "success",
            data: dayMenu
        }).status(200);
    },

    addMenu(req, res) {
        const newMenu = req.body;
        const createdMenu = MenuService.addMenu(newMenu);
        return res.json({
            status: "new menu successfully created",
            data: createdMenu
        }).status(201);
    }
}

export default MenuController;