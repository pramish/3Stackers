import React, { useState } from "react";
import styled from "styled-components";

import meme from "../../assets/meme.jpg";
import defaultImg from "../../assets/default-girl.png";

const EachFeed = () => {
  const handleClick = () => {};

  return (
    <Container onClick={handleClick}>
      <div className="img-wrapper">
        <img src={meme} />
      </div>
      <div className="details">
        <div className="d-profile">
          <img src={defaultImg} />
          <span>John Doe</span>
        </div>
        <div className="d-emoji-container">
          <div className="d-emoji">2 Likes</div>
          <div className="d-emoji">23 Comments</div>
        </div>
      </div>
    </Container>
  );
};

export default EachFeed;

const Container = styled.div`
  cursor: pointer;
  display: grid;
  transition: transform 300ms ease 100ms;
  &:hover ~ .item {
    transform: translateX(25%);
  }
  &:hover {
    transform: scale(1.2) !important;
  }

  .img-wrapper {
    height: 12rem;
    width: 22rem;
    img {
      height: auto;
      max-height: 100%;
      width: 100%;
      object-fit: cover;
      height: 20rem;
      border-radius: 8%;
    }
  }
`;
