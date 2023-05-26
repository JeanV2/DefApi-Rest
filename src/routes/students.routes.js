"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Students = require("../Controllers/Students.controller");
const router = (0, _express.Router)();
router.get("/GetStudents", _Students.GetStudents);
router.post("/CreateStudents", _Students.CreateStudents);
router.delete("/DeleteStudents", _Students.DeleteStudents);
router.put("/UpdateStudents", _Students.UpdateStudents);
var _default = router;
exports.default = _default;