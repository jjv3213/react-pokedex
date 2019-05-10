import React from "react";

import styled from "styled-components";

const Sprite = styled.img`
  height: 200px;
`;

const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// function to convert id to a 3 digit number to use in api
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

const PokemonCard = ({ name, url }) => {
  let pokemonIndex = url.split("/")[url.split("/").length - 2];
  let imgSrc = `${IMAGE_URL}${padToThree(pokemonIndex)}.png`;

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <h5 className="card-header">{pokemonIndex}</h5>
        <Sprite
          className="card-img-top rounded mx-auto mt-2"
          src={imgSrc}
          alt={name}
        />
        <div className="card-body mx-auto">
          <h6 className="card-title text-capitalize">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
