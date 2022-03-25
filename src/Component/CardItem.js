import React from "react";
import styled from "styled-components";
// import Button from '@material-ui/core/Button';

const CardItem = (props) => {
  return (
    <CardItemWrapper>
      <ImageWrapper></ImageWrapper>
      <ContentWrapper>
        <Categories></Categories>
        <Title></Title>
        <Description></Description>
        <Link></Link>
      </ContentWrapper>
    </CardItemWrapper>
  );
};

export default CardItem;

const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  margin: 1%;
`;

const ContentWrapper = styled.div``;

const Categories = styled.div``;

const Title = styled.div``;

const Description = styled.div``;

const Link = styled.div``;
