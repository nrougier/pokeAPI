import { useEffect } from "react";
import { useState } from "react";

export default function PokeApi() {
  const [item, setItem] = useState("");
  const [search, setSearch] = useState(1);
  const [image, setImage] = useState("");
  const [namePokemon, setNamePokemon] = useState("");

  const handleSearchName = (e) => {
    e.preventDefault();
    setSearch(item);
  };

  const handleSearchRandom = (e) => {
    e.preventDefault();
    let random = Math.floor(Math.random() * 248);
    setSearch(random);
  };

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
    const getPokemon = async (url) => {
      try {
        let res = await fetch(url);
        let json = await res.json();
        const imgPokemon =
          json.sprites.other["official-artwork"]["front_default"];
        const namePokemon = json.name;
        setImage(imgPokemon);
        setNamePokemon(namePokemon);
      } catch (e) {
        console.info(e);
      }
    };

    getPokemon(url);
  }, [search]);

  return (
    <>
      <h1>/ / PokeAPI</h1>
      <form action="">
        <input onChange={(e) => setItem(e.target.value)} type="text" />
        <button onClick={handleSearchName}>Buscar</button>
        <button onClick={handleSearchRandom}>Aleatorio</button>
      </form>
      <div>
        <h2>{namePokemon.toUpperCase()}</h2>
        <img src={image} alt="" />
      </div>
    </>
  );
}
