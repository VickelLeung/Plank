import Axios from "axios";

import { CASE_STUDIES, CATEGORIES } from "../PlankAPI/ConstantAPI";

export const fetchCaseStudies = async () => {
  return await Axios.get(CASE_STUDIES);
};

export const fetchCategories = async () => {
  return await Axios.get(CATEGORIES);
};
