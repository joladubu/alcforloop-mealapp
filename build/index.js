"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
var app = (0, _express.default)();
var PORT = 9001;
app.use(_bodyParser.default.json()); // adding app routes/endpoints

app.get('/', function (req, res) {
  res.send('The API is working');
});
app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/menu', _menu.default);
app.use('/api/v1/orders', _order.default);
app.listen(PORT, function () {
  console.log("Server is running on PORT ".concat(PORT));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map