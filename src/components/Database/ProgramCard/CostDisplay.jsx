import React from "react";

export const CostDisplay = ({ cost }) => {
  const getCostSymbol = (costValue) => {
    const costMap = {
      "$1-100": "$",
      "$101-500": "$$",
      "$501-1000": "$$$",
      "$1000+": "$$$$",
    };
    return costMap[costValue.trim()];
  };

  const isAllNonDollar = (costArray) => {
    return (Array.isArray(costArray) ? costArray : costArray.split(",")).every(
      (c) => !c.trim().startsWith("$")
    );
  };

  return (
    <div className="mt-2 text-gray-700">
      <span className="font-medium">Cost: </span>
      {(Array.isArray(cost) ? cost : cost.split(",")).map((c, index) => {
        const symbol = getCostSymbol(c);
        return symbol ? <span key={index}>{symbol}</span> : null;
      })}
      {isAllNonDollar(cost) && <span>Free</span>}
    </div>
  );
};
