"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _students = _interopRequireDefault(require("../src/routes/students.routes"));
const app = (0, _express.default)();

//settings
app.set('Port', _config.default.port);
//midleweares
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_students.default);
var _default = app;
exports.default = _default;