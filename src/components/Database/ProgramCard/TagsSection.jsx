import React from "react";
import { TruncatableTags } from "./Tags/TruncatableTags";
import { processTagData } from "../../../utils/tagUtils";

export const TagsSection = ({
  eligibility,
  areaOfInterest,
  cost,
  type,
  season,
}) => {
  // Process raw props into structured tag data
  const allTags = processTagData({
    eligibility,
    areaOfInterest,
    cost,
    type,
    season,
  });

  return <TruncatableTags tags={allTags} />;
};

export default TagsSection;