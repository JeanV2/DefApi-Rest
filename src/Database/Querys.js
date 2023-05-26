"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  GetStudentsQuery: 'Select * from tbestudiante',
  CreateStudentsQuery: 'insert into tbestudiante (Cedula,NombreCompleto,Apellidos,Creditos) values(@Cedula,@NombreCompleto,@Apellidos,@Creditos)',
  DeleteStudentsQuery: 'delete from tbEstudiante where Cedula=@Cedula',
  UpdateStudentsQury: 'UPDATE tbestudiante SET NombreCompleto=@NombreCompleto,Apellidos=@Apellidos,Creditos=@Creditos WHERE cedula=@Cedula'
};
exports.default = _default;