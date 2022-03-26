import React from "react";
import styled from "styled-components";

import PlaceHolderImg from "../Assets/placeholder-image.jpg";

const CardItem = (props) => {
  return (
    <CardItemWrapper>
      <ImageWrapper>
        {props.thumbnail ? (
          <img src={props.thumbnail} />
        ) : (
          <img src={PlaceHolderImg} alt="Loading..." />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <Categories>{props.categories[0].title}</Categories>
        <Underline /> <Title>{props.title}</Title>
        <Description>{props.excerpt}</Description>
        <Link href={props.link}>View Case Study</Link>
      </ContentWrapper>
    </CardItemWrapper>
  );
};

export default CardItem;

const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 50%;
`;

const ImageWrapper = styled.div``;

const ContentWrapper = styled.div`
  margin: 0 5%;
`;

const Categories = styled.div``;

const Title = styled.div`
  font-size: 3em;
  margin-bottom: 2%;
`;

const Description = styled.div``;

const Link = styled.a``;

const Underline = styled.div`
  border: 1px solid black;
  margin-bottom: 5%;
`;
