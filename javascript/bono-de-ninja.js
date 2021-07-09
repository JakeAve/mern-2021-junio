class Ninja {
  constructor() {
    this.nombre = "foo";
    this.costo = "12";
    this.poder = "12";
    this.resiliencia = "12";
    this.color = "red";
  }
}

const ninjaRojo = new Ninja();

function crearNijaEnHTML(ninja) {
  const { nombre, costo, poder, resiliencia, color } = ninja;

  const clone = document.querySelector("#carta").content.cloneNode(true);

  clone.querySelector(".nombre").innerHTML = `Nombre: ${nombre}`;
  clone.querySelector(".costo").innerHTML = `Costo: ${costo}`;
  clone.querySelector(".poder").innerHTML = `Poder: ${poder}`;
  clone.querySelector(".resiliencia").innerHTML = `Resiliencia: ${resiliencia}`;
  clone.querySelector(".foto").style.backgroundColor = color;

  const container = document.querySelector("#juego");
  container.appendChild(clone);
}

crearNijaEnHTML(ninjaRojo);
crearNijaEnHTML(ninjaRojo);
