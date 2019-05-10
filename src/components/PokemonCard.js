import React from "react";

import styled from "styled-components";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

const PokemonCard = ({ name, url }) => {
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <h5 className="card-header">{pokemonIndex}</h5>
        <Sprite className="card-img-top rounded mx-auto mt-2" src={imageUrl} />
        <div className="card-body mx-auto">
          <h6 className="card-title text-capitalize">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
