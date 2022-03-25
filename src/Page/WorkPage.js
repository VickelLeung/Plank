import React, { PureComponent } from "react";
import styled from "styled-components";

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

        {/* {this.state.categories.map((val) => {
          return <div>{val.title}</div>;
        })} */}
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
