"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateStudents = exports.GetStudents = exports.DeleteStudents = exports.CreateStudents = void 0;
var _mssql = _interopRequireDefault(require("mssql"));
var _Conecction = require("../Database/Conecction");
var _Querys = _interopRequireDefault(require("../Database/Querys"));
const GetStudents = async (req, res) => {
  try {
    const pool = await (0, _Conecction.GetConnection)();
    const Result = await pool.request().query(_Querys.default.GetStudentsQuery);
    res.json(Result.recordset);
  } catch (error) {
    console.log(error);
  }
};
exports.GetStudents = GetStudents;
const CreateStudents = async (req, res) => {
  try {
    const {
      Cedula,
      NombreCompleto,
      Apellidos,
      Creditos
    } = req.body;
    const pool = await (0, _Conecction.GetConnection)();
    await pool.request().input("Cedula", _mssql.default.VarChar, Cedula).input("NombreCompleto", _mssql.default.VarChar, NombreCompleto).input("Apellidos", _mssql.default.VarChar, Apellidos).input("Creditos", _mssql.default.Int, Creditos).query(_Querys.default.CreateStudentsQuery);
    res.json("new student" + Cedula);
  } catch (error) {
    console.log(error);
  }
};
exports.CreateStudents = CreateStudents;
const DeleteStudents = async (req, res) => {
  try {
    const {
      Cedula
    } = req.body;
    const Conexion = await (0, _Conecction.GetConnection)();
    Conexion.request().input("Cedula", _mssql.default.VarChar, Cedula).query(_Querys.default.DeleteStudentsQuery);
    res.json("Delete Student :" + Cedula);
  } catch (error) {
    console.log(error);
  }
};
exports.DeleteStudents = DeleteStudents;
const UpdateStudents = async (req, res) => {
  try {
    const {
      Cedula,
      NombreCompleto,
      Apellidos,
      Creditos
    } = req.body;
    const pool = await (0, _Conecction.GetConnection)();
    await pool.request().input("Cedula", _mssql.default.VarChar, Cedula).input("NombreCompleto", _mssql.default.VarChar, NombreCompleto).input("Apellidos", _mssql.default.VarChar, Apellidos).input("Creditos", _mssql.default.Int, Creditos).query(_Querys.default.UpdateStudentsQury);
    res.json("update student: " + NombreCompleto);
  } catch (error) {
    console.log(error);
  }
};
exports.UpdateStudents = UpdateStudents;