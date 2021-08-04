const faker = require("faker");

class Usuario {
  constructor() {
    this.id = faker.datatype.uuid();
    this.nombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.número = faker.phone.phoneNumber();
    this.correo = faker.internet.email();
    this.contraseña = faker.internet.password();
  }
}

module.exports = Usuario;
