import React from "react";

import { ReactComponent as Asset1 } from "../Assets/asset1.svg";
import { ReactComponent as Asset2 } from "../Assets/asset2.svg";
import { ReactComponent as Asset3 } from "../Assets/asset3.svg";

const iconTypes = {
  asset1: Asset1,
  asset2: Asset2,
  asset3: Asset3,
  // arrowIcon: ArrowIcon,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
