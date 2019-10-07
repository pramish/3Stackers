import React, { useState } from "react";

import {
  MdFormatListBulleted,
  MdChevronRight,
  MdTrendingUp,
  MdAdd
} from "react-icons/md";
import { DiCodeigniter } from "react-icons/di";
import { Fab, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import defaultImg from "../../assets/default-girl.png";
import EachFeed from "./EachFeed";
import Categories from "./components/Categories";
import { HomeContainer } from "./style";
import { CustomModel } from "./components/Model";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleAddClick = () => {
    handleOpen();
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HomeContainer>
      <div className="title">
        <h4>Photobooth</h4>
      </div>
      <div className="navbtns">
        <div>
          <input type="text" placeholder="Search" />

          <div className="fab">
            <Fab color="primary" aria-label="add" onClick={handleAddClick}>
              <MdAdd size="1rem" />
            </Fab>
          </div>
          <MdFormatListBulleted color="white" size="2rem" />
        </div>
      </div>
      <div className="profile">
        <div>
          <img src={defaultImg} />
        </div>
      </div>

      <div className="side-categories">
        <div className="categories">
          <Categories />
        </div>
      </div>
      <div className="latest">
        <div style={{ marginLeft: "4rem" }}>CATEGORIES</div>
        <div className="feeds-text">
          <div className="feeds-btn">
            <span>Latest Feeds </span>
            <span>Popular Feeds</span>
          </div>
        </div>
      </div>
      <div className="main-feeds">
        <CustomModel open={open} handleClose={handleClose} />
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {[0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2].map(value => (
              <Grid key={value} item>
                <div>
                  <Link to={`/feed/123431`}>
                    <EachFeed />
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
      <div className="side-artist">
        <div>
          <img src={defaultImg} />
        </div>
        <div>
          <img src={defaultImg} />
        </div>
        <div>
          <img src={defaultImg} />
        </div>
        <div>
          <img src={defaultImg} />
        </div>
        <div></div>
      </div>
    </HomeContainer>
  );
};
export default Home;
