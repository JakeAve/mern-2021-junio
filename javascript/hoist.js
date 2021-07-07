const magenta = (texto) => console.log(`\u001b[35m${texto}\u001b[0m`);

// 6
magenta("---6---");
console.log(genre);
// undefined
var genre = "disco";
// ahora genre tiene valor "disco"
rewind();
// claro que sí
function rewind() {
  genre = "rock";
  // usamos un variable local de genre
  console.log(genre);
  // "rock"
  var genre = "r&b";
  // se cambia el variable local a "r&b"
  console.log(genre);
  // no sé
}

console.log(genre);
// "disco"

// 8
magenta(`---8---`);

console.log(makeDojo("Chicago", 65));
// dojo = {}
// dojo = {name: "Chicago"}
// dojo = {name: "Chicago", students: 65}
// dojo = {name: "Chicago", students: 65, hiring: true}

console.log(makeDojo("Berkeley", 0));
// dojo = {}
// dojo = {name: "Berkeley"}
// dojo = {name: "Berkeley", students: 0}
// dojo = {name: "Berkeley", students: 0, hiring: false}

function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo.hiring = "closed for now";
  }
  return dojo;
}
