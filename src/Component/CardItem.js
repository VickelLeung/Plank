import React from "react";
import styled from "styled-components";

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
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-right: 5%;
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

  &hover: {
    cursor: pointer;
  }
  &:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const Underline = styled.div`
  margin-bottom: 6%;
  border: 1px solid white;
`;

const IconContainer = styled.div`
  text-align: center;
`;
