class Ninja {
  constructor(nombre, salud = 0, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }

  sayName() {
    console.log(this.nombre);
  }

  showStats() {
    const { nombre, salud, velocidad, fuerza } = this;
    return {
      nombre,
      salud,
      velocidad,
      fuerza,
    };
  }

  drinkSake() {
    this.salud += 10;
  }
}

// const ninja1 = new Ninja("Pedro");
// const ninja2 = new Ninja("Juan");

// console.table({ ninja1, ninja2 });
// ninja1.sayName();
// ninja1.drinkSake();
// console.log({stats: ninja1.showStats())})

module.exports = Ninja;
