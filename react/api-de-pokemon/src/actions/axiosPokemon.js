import axios from "axios";

export default async function axiosPokemon() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=900"
    );
    return response.data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
