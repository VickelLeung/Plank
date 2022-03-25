import React, { PureComponent } from "react";
import styled from "styled-components";

import CardItem from "../Component/CardItem";

import { fetchCaseStudies, fetchCategories } from "../PlankAPI/plankAPI";

class WorkPage extends PureComponent {
  state = {
    caseStudies: [],
    categories: [],
  };

  componentDidMount = () => {
    //Call api and set the state
    fetchCaseStudies().then((results) => {
      this.setState({ caseStudies: results.data["case-studies"] });
    });

    fetchCategories().then((results) => {
      this.setState({ categories: results.data["categories"] });
    });
  };

  render() {
    return (
      <PageWrapper>
        <Title>WORK</Title>

        <CardWrapper>
          {this.state.caseStudies.map((val) => {
            return (
              <CardItem
                id={val.id}
                categories={val.categories}
                excerpt={val.excerpt}
                link={val.link}
                thumbnail={val.thumbnail}
                title={val.title}
              />
            );
          })}
        </CardWrapper>
      </PageWrapper>
    );
  }
}

export default WorkPage;

const PageWrapper = styled.div`
  margin: 2%;
`;

const Title = styled.div`
  font-size: 2em;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
