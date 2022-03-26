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
          View Case Study
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
  flex: 45%;
  color: white;
  margin: 4% 0;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  margin: 0 5%;
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

  &:before {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $hover;
    transform: translateX(-100%);
  }
  &:after {
    content: attr(data-content);
    left: 0;
    top: 0;
    width: 0;
    margin: 12px;
    color: $hover;
    white-space: nowrap;
    overflow: hidden;
    transition: width 0.5s ease;
  }
  > span {
    display: block;
    margin: 2px;
    padding: 10px;
    background: $bg;
  }
  &:hover:before {
    transform: translateX(0);
  }
  &:hover:after {
    width: calc(100% - 24px);
  }
`;

const Underline = styled.div`
  margin-bottom: 6%;
  border: 1px solid white;
`;

const IconContainer = styled.div`
  text-align: center;
`;
