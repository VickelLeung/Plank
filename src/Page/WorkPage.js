import React, { PureComponent } from "react";
import styled from "styled-components";

import IconComponent from "../Component/icon";

import CardItem from "../Component/CardItem";
import CategoriesItem from "../Component/CategoriesItem";

import { fetchCaseStudies, fetchCategories } from "../PlankAPI/plankAPI";

class WorkPage extends PureComponent {
  state = {
    caseStudies: [],
    categories: [],
    selectedCaseStudies: [],
    selectedCategory: "All",
  };

  componentDidMount = () => {
    //Call api and set the state
    fetchCaseStudies().then((results) => {
      this.setState({ caseStudies: results.data["case-studies"] });
      this.setState({ selectedCaseStudies: results.data["case-studies"] });
    });

    fetchCategories().then((results) => {
      this.setState({ categories: results.data["categories"] });
    });
  };

  updateFilter = (val) => {
    const result = this.state.caseStudies.filter((el) => {
      return el.categories[0].title == val;
    });

    this.setState({ selectedCaseStudies: result, selectedCategory: val });
  };

  updateFilterAll = () => {
    this.setState({
      selectedCaseStudies: this.state.caseStudies,
      selectedCategory: "All",
    });
  };

  render() {
    return (
      <PageWrapper>
        <IconDotted name={"asset2"} />
        <MainWrapper>
          <HeaderWrapper>
            <Title>WORK</Title>
          </HeaderWrapper>
          <CategoriesWrapper>
            <CategoriesItem
              onClickFilter={this.updateFilterAll}
              slug={"All"}
              title={"All"}
              selectedCategory={this.state.selectedCategory}
            />
            {this.state.categories.map((val, index) => {
              return (
                <CategoriesItem
                  key={index}
                  onClickFilter={() => this.updateFilter(val.title)}
                  slug={val.slug}
                  title={val.title}
                  selectedCategory={this.state.selectedCategory}
                />
              );
            })}
          </CategoriesWrapper>
          <CardWrapper>
            {this.state.selectedCaseStudies.map((val) => {
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
        </MainWrapper>{" "}
        <SvgWrapper>
          <IconAsset3 name={"asset3"} />
          <IconAsset1 name={"asset1"} />
        </SvgWrapper>
      </PageWrapper>
    );
  }
}

export default WorkPage;

const PageWrapper = styled.div`
  background: #181818;
`;

const MainWrapper = styled.div`
  padding: 0 5%;
`;

const IconDotted = styled(IconComponent)`
  position: absolute;
  top: 0;
  right: 0;
`;

const IconAsset3 = styled(IconComponent)`
  background-position: right bottom;
`;

const IconAsset1 = styled(IconComponent)`
  background-position: left bottom;
  max-height: 5%;
  max-width: 5%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 4em;
  color: white;
  padding: 3% 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2% 0 4% 0;
  border-top: 2px solid white;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Underline = styled.div`
  border-top: 2px solid white;
`;

const SvgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
