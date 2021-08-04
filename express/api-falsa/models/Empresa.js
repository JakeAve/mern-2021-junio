const faker = require("faker");

class Empresa {
  constructor() {
    this.id = faker.datatype.uuid();
    this.nombre = faker.company.companyName();
    this.dirección = {
      calle: faker.address.streetAddress(),
      ciudad: faker.address.cityName(),
      estado: faker.address.state(),
      postal: faker.address.zipCode(),
      país: faker.address.countryCode(),
    };
  }
}

module.exports = Empresa;
