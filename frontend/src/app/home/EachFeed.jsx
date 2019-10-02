import React, { useState } from "react";
import styled from "styled-components";

import meme from "../../assets/meme.jpg";

const EachFeed = () => {
  const handleClick = () => {};

  return (
    <Container onClick={handleClick}>
      <div className="img-wrapper">
        <img src={meme} />
      </div>
    </Container>
  );
};

export default EachFeed;

const Container = styled.div`
  cursor: pointer;
  display: grid;

  .img-wrapper {
    height: 12rem;
    width: 22rem;
    img {
      height: auto;
      max-height: 100%;
      width: 100%;
      object-fit: cover;
      height: 20rem;
    }
  }
`;
