import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Sprite = styled.img`
  height: 200px;
`;

const Card = styled.div`
  box-shadow: 16px 15px 29px -9px rgba(0, 0, 0, 0.75);
  transition: all ease 500ms;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// function to convert id to a 3 digit number to use in api
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

const PokemonCard = ({ name, url }) => {
  const [pokemonName, setPokemonName] = useState(null);
  const [pokemonIndex, setpokemonIndex] = useState(null);
  const [imgSrc, setimgSrc] = useState(null);

  useEffect(() => {
    let pokemonIndex = url.split("/")[url.split("/").length - 2];
    let imgSrc = `${IMAGE_URL}${padToThree(pokemonIndex)}.png`;

    setPokemonName(name);
    setpokemonIndex(pokemonIndex);
    setimgSrc(imgSrc);
  }, [url, name]);

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <StyledLink to={`pokemon/${pokemonIndex}`}>
        <Card className="card">
          <h5 className="card-header">{pokemonIndex}</h5>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={imgSrc}
            alt={pokemonName}
          />
          <div className="card-body mx-auto">
            <h6 className="card-title text-capitalize">{pokemonName}</h6>
          </div>
        </Card>
      </StyledLink>
    </div>
  );
};

export default PokemonCard;
