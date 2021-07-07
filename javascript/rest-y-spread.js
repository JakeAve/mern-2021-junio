const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
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
  createdAt: 1543945177623,
};

const hacerDireccionBonita = (usuario) => {
  const { addresses } = usuario;

  const addressesArregladas = addresses.map((dir) => {
    const { city } = dir;
    if (city === "Washington, D.C.") return { ...dir, zipcode: "20501" };
    else return dir;
  });

  const direcciones = addressesArregladas
    .map((dir) => {
      const { address: calle, city, zipcode } = dir;
      return `${calle}, ${city}, ${zipcode}`;
    })
    .join(" y ");

  return direcciones;
};

const intro = (usuario) => {
  const { firstName, lastName, ...otrasCosas } = usuario;

  const direcciones = hacerDireccionBonita(otrasCosas);

  return `The first name is ${firstName} and the last name is ${lastName}. ${direcciones}. Vive en Otra información util será \n${JSON.stringify(
    otrasCosas,
    null,
    4
  )}`;
};

const introDePersona = intro(person);

console.log(introDePersona);

const luke = { name: "Luke", last: "Skywalker" };

const convertToMaster = (obj) => ({ ...obj, name: `Master ${obj.name}` });
// const convertToMaster = (obj) => {
//   obj.name = `Master ${obj.name}`;
//   return obj;
// };

const masterLuke = convertToMaster(luke);

console.log({ luke, masterLuke });
