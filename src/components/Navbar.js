import React from "react";
import styled from "styled-components";

// const navbarStyle = styled.nav``

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
        Pokedex
      </a>
    </nav>
  );
};

export default Navbar;
