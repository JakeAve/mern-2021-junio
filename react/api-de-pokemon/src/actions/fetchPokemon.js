export default async function fetchPokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=900"
    );
    if (!response.ok) throw new Error(`Respuesta es ${response.status}`);
    const jsObj = await response.json();
    console.log({ response, jsObj });

    return jsObj.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
