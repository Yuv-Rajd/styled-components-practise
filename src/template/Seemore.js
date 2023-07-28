import React, { useState } from "react";
import "./Seemore.css";
import styled from "@emotion/styled";

const Div = styled.div`
  border: 1px solid black;
  background-color: white;
  width: ${(props) => props.w};
  white-space: ${(props) => props.fill};
  overflow: ${(props) => props.overflow};
  text-overflow: ellipsis;
  position: relative;
  padding: 10px;
  padding-right: ${(props) => props.mr};
  &::after {
    content: "${(props) => props.text}";
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 5px;
    background-color: white;
    cursor: pointer;
  }
`;

const Para = styled.p`
  width: 180px;
  text-overflow: ellipsis;
`;

const SeeMore = ({ content }) => {
  const [see, setSee] = useState(false);

  const handleClick = () => {
    setSee(!see);
  };
  return (
    <Div
      overflow={"hidden"}
      fill={see ? "" : "nowrap"}
      text={see ? "Read Less" : "Read More"}
      mr={see ? "0px" : "10%"}
      w={see ? "100%" : "90%"}
      onClick={handleClick}
    >
      {content}
    </Div>
  );
};

export default SeeMore;
