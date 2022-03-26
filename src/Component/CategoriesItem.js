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
`;

const Title = styled.div`
  color: white;
  transition: 0.5s all 0.5s;
  &:hover {
    color: black;
    background-color: white;
    cursor: pointer;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
`;

const SelectedBorder = styled.div`
  border: 1px solid white;
  padding: 1% 2%;
`;

const NonSelectedBorder = styled.div``;
