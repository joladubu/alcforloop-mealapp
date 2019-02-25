import MenuService from '../services/menu.service';

const MenuController = {
    getMenu(req, res) {
        const DailyMenu = MenuService.getMenu();
        return res.json({
            status: "success",
            data: DailyMenu
        }).status(200);
    },

    addMenu(req, res) {
        const newMenu = req.body;
        const AddedMenu = MenuService.addMenu(newMenu);
        return res.json({
            status: "new menu successfully created",
            data: AddedMenu
        }).status(201);
    }
}

export default MenuController;
