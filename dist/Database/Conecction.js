"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetConnection = GetConnection;
var _mssql = _interopRequireDefault(require("mssql"));
const DbConfig = {
  user: "Programs2023",
  password: "Progam12345%",
  server: "baseina.database.windows.net",
  database: "Estudiantes",
  options: {
    encrypt: true,
    // Utilizar cifrado SSL
    trustServerCertificate: true // Cambiar a true para certificados autofirmados / desarrollo local
  }
};

async function GetConnection() {
  try {
    const pool = await _mssql.default.connect(DbConfig);
    return pool;
  } catch (error) {
    console.log(error);
  }
}