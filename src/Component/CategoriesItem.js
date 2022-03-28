import React from "react";
import styled from "styled-components";

const CategoriesItem = (props) => {
  return (
    <CategoriesWrapper>
      {props.title == props.selectedCategory ? (
        <SelectedBorder>
          <Title onClick={props.onClickFilter}>
            {props.title.toUpperCase()}
          </Title>
        </SelectedBorder>
      ) : (
        <NonSelectedBorder>
          <Title onClick={props.onClickFilter}>
            {props.title.toUpperCase()}
          </Title>
        </NonSelectedBorder>
      )}
    </CategoriesWrapper>
  );
};

export default CategoriesItem;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 50%;
  font-size: 1em;
  padding-right: 2%;
  align-self: center;
`;

const Title = styled.div`
  color: white;
  transition: 0.5s all;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const SelectedBorder = styled.div`
  border: 1px solid white;
  padding: 2% 6%;

  &:hover {
    background-color: white;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
`;

const NonSelectedBorder = styled.div`
  padding: 2% 6%;

  &:hover {
    background-color: white;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
`;
