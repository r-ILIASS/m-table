import React from "react";
// Assets
import FullHeart from "../../../assets/full-heart.svg";
import EmptyHeart from "../../../assets/empty-heart.svg";

import { Wrapper } from "./Like.styles";

const Like = ({ data, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {data.isLiked ? (
        <img src={FullHeart} alt="liked" />
      ) : (
        <img src={EmptyHeart} alt="liked" />
      )}
    </Wrapper>
  );
};

export default Like;
