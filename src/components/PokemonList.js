import React, { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=100";
  const [pokemon, setpokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      let res = await axios.get(url);
      setpokemon(res.data.results);
    };
    getPokemon();
  });

  return (
    <React.Fragment>
      {pokemon ? (
        <div className="row">
          {pokemon.map(pokemon => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            );
          })}
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </React.Fragment>
  );
};

export default PokemonList;
