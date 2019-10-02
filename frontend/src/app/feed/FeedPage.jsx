import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import meme from "../../assets/meme.jpg";
const FeedPage = props => {
  const backBthHandler = () => {
    props.history.push("/home");
  };
  return (
    <Container>
      <div className="navbtns">
        <div className="back" onClick={backBthHandler}>
          <IoIosArrowBack color="white" size="2rem" /> Back
        </div>
        <div></div>
      </div>

      <div className="main-body">
        <div className="left-img">
          <img src={meme} />
        </div>

        <div className="right-comments">
          <h3>Comments</h3>
        </div>
      </div>
    </Container>
  );
};

FeedPage.propTypes = {};

export default FeedPage;

const Container = styled.div`
  margin-top: 0.5rem;

  color: white;

  .back {
    cursor: pointer;
    width: 10%;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .main-body {
    display: flex;
    flex-direction: row;
  }
  .left-img {
    width: 50%;
    padding: 1rem;
    img {
      max-width: 100%;
    }
  }
  .right-img {
    width: 50%;
  }
`;
