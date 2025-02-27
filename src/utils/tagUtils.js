export const processTagData = ({
  eligibility,
  areaOfInterest,
  cost,
  type,
  season,
}) => {
  const allTags = [];

  // Process eligibility tags
  if (eligibility && eligibility !== "None" && eligibility !== "N/A") {
    const eligTags = Array.isArray(eligibility)
      ? eligibility
      : eligibility
          .split(",")
          .map((e) => e.trim())
          .filter((e) => e);

    eligTags.forEach((tag) => {
      allTags.push({
        text: tag.trim(),
        type: "eligibility",
      });
    });
  }

  // Process areaOfInterest tags
  if (areaOfInterest) {
    const interestTags = Array.isArray(areaOfInterest)
      ? areaOfInterest
      : areaOfInterest
          .split(",")
          .map((e) => e.trim())
          .filter((e) => e);

    interestTags.forEach((tag) => {
      allTags.push({
        text: tag.trim(),
        type: "areaOfInterest",
      });
    });
  }

  // Process cost tags
  if (cost) {
    const costTags = Array.isArray(cost)
      ? cost
      : cost
          .split(",")
          .map((e) => e.trim())
          .filter((e) => e);

    const filteredCostTags = costTags.filter((tag) =>
      ["Paid/Stipend", "Aid Available", "No Aid Available"].some((c) =>
        tag.trim().includes(c)
      )
    );

    filteredCostTags.forEach((tag) => {
      allTags.push({
        text: tag.trim(),
        type: "cost",
      });
    });
  }

  // Process type tags
  if (type) {
    const typeTags = Array.isArray(type)
      ? type
      : type
          .split(",")
          .map((e) => e.trim())
          .filter((e) => e);

    typeTags.forEach((tag) => {
      allTags.push({
        text: tag.trim(),
        type: "type",
      });
    });
  }

  // Process season tags
  if (season) {
    const seasonTags = Array.isArray(season)
      ? season
      : season
          .split(",")
          .map((e) => e.trim())
          .filter((e) => e);

    seasonTags.forEach((tag) => {
      allTags.push({
        text: tag.trim(),
        type: "season",
      });
    });
  }

  return allTags;
};
