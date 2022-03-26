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
        <HeaderWrapper>
          <Title>WORK</Title>
          <Icon name={"asset2"} />
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
        <Underline />
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

        <SvgWrapper>
          <IconComponent name={"asset3"} />
          <IconComponent name={"asset1"} />
        </SvgWrapper>
      </PageWrapper>
    );
  }
}

export default WorkPage;

const PageWrapper = styled.div`
  background: #181818;
  height: 100%;
`;

const Icon = styled(IconComponent)``;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 4em;
  color: white;
  padding: 3% 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Underline = styled.div`
  margin: 1% 0;
  border-bottom: 2px solid white;
`;

const SvgWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
