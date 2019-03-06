"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deconstructing Router from express using {}
// Controller
// Creating an Instance of the router
var router = (0, _express.Router)();
router.get('/', _meal.default.fetchAllMeals);
router.post('/', _meal.default.addAMeal);
router.get('/:id', _meal.default.getSingleMeal);
router.delete('/:id', _meal.default.deleteAMeal);
router.put('/:id', _meal.default.UpdateAMeal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meal.route.js.map