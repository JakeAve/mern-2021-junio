const pedro = {
  firstName: "pedro",
  lastName: "pascal",
  edad: 47,
  hijos: ["Baby Yoda"],
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
};

const hulk = {
  firstName: "bruce",
  lastName: "banner",
  edad: 52,
  hijos: [],
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
};

const trump = {
  firstName: "donald",
  lastName: "trump",
  edad: 52,
  hijos: ["Donald Jr", "Ivanka"],
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
};

const jose = {
  firstName: "jose",
  lastName: "de nazaret",
  edad: 52,
  hijos: ["Jesus", "Santiago", "Juan"],
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
};

const introduccion = (usuario) => {
  try {
    const {
      firstName: lowerFirstName,
      lastName: _lastName,
      edad,
      hijos,
      addresses: [{ city: city1 }, { city: city2 }],
    } = usuario;

    // const primerHijo = hijos?.[0];
    // const tercerHijo = hijos?.[2];

    const [primerHijo] = hijos;
    const [, , tercerHijo] = hijos;

    const firstName = lowerFirstName.toUpperCase();
    const lastName = _lastName.toUpperCase();
    //   const tercerHijo = _tercerHijo.toUpperCase();
    console.log(
      `Este usuario se llama ${firstName} ${lastName}. Tiene ${edad} años y su hijo mayor se llama ${primerHijo}. Su tercer hijo se llama ${tercerHijo}. Tiene una casa en ${city1} y ${city2}`
    );
  } catch (err) {
    console.error(err);
    console.log("This user has weird data");
  }
};

// introduccion(pedro);
// introduccion(hulk);
// introduccion(trump);
// introduccion(jose);

// 3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
  //   password: "98765",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
// console.log(password); // "12345"
// console.log(hashedPassword); // undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; // 2
const [, , , second] = numbers; // 5
const [, , , , , , , , third] = numbers; // 2
//Predict the output
// console.log(first == second); // false
// console.log(first == third); // true
