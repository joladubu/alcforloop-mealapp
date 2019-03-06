"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  getMenu: function getMenu(req, res) {
    var DailyMenu = _menu.default.getMenu();

    return res.json({
      status: "success",
      data: DailyMenu
    }).status(200);
  },
  addMenu: function addMenu(req, res) {
    var newMenu = req.body;

    var AddedMenu = _menu.default.addMenu(newMenu);

    return res.json({
      status: "new menu successfully created",
      data: AddedMenu
    }).status(201);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map