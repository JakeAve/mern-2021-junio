function existe(arr, val) {
  let encontrado = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) encontrado = true;
  }
  return encontrado;
}

const arr1 = [1, 2, 3, 4];

// const existe2 = existe(arr1, 2);

const existe2 = arr1.includes(2);

// console.log({ existe2 });

const User = function (nombre, correo, edad) {
  this.nombre = nombre;
  this.correo = correo;
  this.edad = edad;

  this.cumplir = function () {
    this.edad++;
  };
  return this;
};

const juan = User("Juan", "juan@juan.cl", 22);

juan.cumplir();

for (let i = 0; i < 9999999999; i++) {
  juan.cumplir();
}

console.log({ juan, edadDeJuan: juan.edad });
