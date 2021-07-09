class Carta {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }
}

class Unidad extends Carta {
  constructor(nombre, costo, poder, res) {
    super(nombre, costo);
    this.poder = poder;
    this.res = res;
    this.efectos = [];
    this.agresores = [];
  }

  atacar(recipiente) {
    if (recipiente instanceof Unidad === false)
      throw new Error("Recipiente tiene que ser una Unidad");

    console.log(`${this.nombre} atacó a ${recipiente.nombre}`);
    recipiente.res = recipiente.res - this.poder;
    recipiente.agresores.push(this);
    if (!recipiente.vivo) {
      recipiente.asasinato = this;
      console.log(`${recipiente.nombre} ya sta muerto por ${this.nombre}`);
    }
  }

  get estáVivo() {
    return this.res > 0;
  }
}

class Efecto extends Carta {
  constructor(nombre, costo, texto, stat, magnitud) {
    super(nombre, costo);
    this.magnitud = magnitud;
    this.stat = stat;
    this.texto = texto;
  }

  aplicar(recipiente) {
    if (recipiente instanceof Unidad) {
      console.log(`Se usó el efecto "${this.nombre}" en ${recipiente.nombre}`);
      recipiente[this.stat] += this.magnitud;
      recipiente.efectos.push(this);
    } else throw new Error("Recipiente tiene que ser una Unidad");
  }
}

const ninjaRojo = new Unidad("Ninja Rojo", 3, 3, 4);
const ninjaNegro = new Unidad("Ninja Negro", 4, 5, 4);
console.table({ ninjaRojo, ninjaNegro });

const algoDif = new Efecto(
  "Algoritmo Difícil",
  2,
  "aumentar la resistencia del objectivo en 3",
  "res",
  3
);
const rechazo = new Efecto(
  "Rechazo de promesa no manejado",
  1,
  "reducir la resistencia del objetivo en 2",
  "res",
  -2
);
const pareja = new Efecto(
  "Programación en pareja",
  3,
  "aumentar el poder del objetivo en 2",
  "poder",
  2
);

// turno 1
algoDif.aplicar(ninjaRojo);

// turno 2
rechazo.aplicar(ninjaNegro);

// turno 3
pareja.aplicar(ninjaRojo);
ninjaRojo.atacar(ninjaNegro);

console.table({ ninjaRojo, ninjaNegro });
