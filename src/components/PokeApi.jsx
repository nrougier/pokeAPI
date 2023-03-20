import { useEffect } from "react";
import { useState } from "react";

export default function PokeApi() {
  const [item, setItem] = useState("");
  const [search, setSearch] = useState(1);
  const [image, setImage] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = `https://pokeapi.co/api/v2/pokemon/${search}`;

  const handleSearchName = (e) => {
    setError(false);
    item === "" ? setSearch("mr-mime") : setSearch(item);
    e.preventDefault();
  };

  const handleSearchRandom = (e) => {
    setError(false);
    e.preventDefault();
    let random = Math.floor(Math.random() * 248);
    setSearch(random);
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetch(url).then((res) =>
        !res.ok
          ? setError(true)
          : res.json().then((data) => {
              setImage(data.sprites.other["official-artwork"]["front_default"]);
              setNamePokemon(data.name);
              setLoading(false);
            })
      );
    } catch (e) {
      console.log(e);
    }
  }, [search]);

  return (
    <>
      <h1>/ / PokeAPI</h1>
      <form action="submit">
        <input onChange={(e) => setItem(e.target.value)} type="text" />
        <button onClick={handleSearchName}>Buscar</button>
        <button onClick={handleSearchRandom}>Aleatorio</button>
      </form>
      {error ? (
        <h2>Error en la busqueda o Pokemon inexistente</h2>
      ) : (
        <div>
          <h2>{loading ? "CARGANDO..." : namePokemon.toUpperCase()}</h2>
          <img src={image} alt="" />
        </div>
      )}
    </>
  );
}
