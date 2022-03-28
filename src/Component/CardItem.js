import React from "react";
import styled, { keyframes } from "styled-components";

import PlaceHolderImg from "../Assets/placeholder-image.jpg";
import IconComponent from "../Component/icon";

const CardItem = (props) => {
  return (
    <CardItemWrapper>
      <ImageWrapper>
        {props.thumbnail ? (
          <Image src={props.thumbnail} />
        ) : (
          <Image src={PlaceHolderImg} alt="Loading..." />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <Categories>{props.categories[0].title}</Categories>
        <Underline />
        <Title>{props.title}</Title>
        <Description>{props.excerpt}</Description>
        <Link href={props.link}>
          VIEW CASE STUDY
          <IconContainer>
            <IconComponent name={"arrowIcon"} />
          </IconContainer>
        </Link>
      </ContentWrapper>
    </CardItemWrapper>
  );
};

export default CardItem;

const CardItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 45%;
  color: white;
  margin: 4% 0;
  flex-grow: 0;
  flex-shrink: 0;

  @media only screen and (max-width: 600px) {
    padding: 2% 0;
  }

  @media only screen and (max-width: 1000px) {
    margin: 10% 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-right: 5%;
  min-width: 15vw;
  max-width: 15vw;

  @media only screen and (max-width: 700px) {
    min-width: 30vw;
    max-width: 30vw;
  }

  @media only screen and (max-width: 1000px) {
    min-width: 25vw;
    max-width: 25vw;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
`;

const Categories = styled.div``;

const Title = styled.div`
  font-size: 3em;
  margin: 4% 0;
  font-weight: bold;

  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
`;

const Description = styled.div``;

const Link = styled.a`
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  color: white;
  border: 2px solid white;
  padding: 2%;
  text-decoration: none;
  align-self: flex-end;
  margin-top: auto;

  transition: transform 250ms, opacity 400ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  @media only screen and (max-width: 500px) {
    width: 95%;
    margin: 4% 0;
  }
`;

const Underline = styled.div`
  margin-bottom: 6%;
  border: 1px solid white;
`;

const IconContainer = styled.div`
  text-align: center;
`;
