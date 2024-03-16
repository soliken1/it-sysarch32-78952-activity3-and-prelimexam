import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "./Pokemon";
import Loading from "./Loading";

const api = "https://us-central1-it-sysarch32.cloudfunctions.net/pokemon";
function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      const response = await fetch(api);
      const data = await response.json();
      setPokemon(data);
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  if (isLoading || pokemon === null) {
    return <Loading />;
  }
  return <Pokemon data={pokemon} />;
}

export default Pokedex;
