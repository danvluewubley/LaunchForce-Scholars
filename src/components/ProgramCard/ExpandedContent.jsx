import React, { useState } from "react";
import { useFavorite } from "./hooks/useFavorite";
import { CardHeader } from "./components/CardHeader";
import { TagsSection } from "./components/TagsSection";
import { CardFooter } from "./components/CardFooter";
import { ExpandedContent } from "./components/ExpandedContent";
import { CostDisplay } from "./components/CostDisplay";

export const ProgramCard = ({
  name,
  description,
  deadline,
  location,
  link,
  season,
  cost,
  type,
  grade,
  age,
  areaOfInterest,
  id,
  eligibility,
  isRollingDeadline,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isFavorited, toggleFavorite } = useFavorite(id);

  const toggleCard = (e) => {
    if (
      !e.target.closest(".favorite-btn") &&
      !e.target.closest(".website-link")
    ) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div
      onClick={toggleCard}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs lg:max-w-md border border-gray-200 cursor-pointer"
    >
      <CardHeader
        name={name}
        link={link}
        isFavorited={isFavorited}
        toggleFavorite={toggleFavorite}
      />

      <TagsSection
        eligibility={eligibility}
        areaOfInterest={areaOfInterest}
        cost={cost}
        type={type}
        season={season}
      />

      <p
        className={`text-gray-600 mt-3 text-sm ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {description}
      </p>

      {cost && <CostDisplay cost={cost} />}

      <CardFooter
        deadline={deadline}
        location={location}
        isRollingDeadline={isRollingDeadline}
      />

      {isExpanded && <ExpandedContent grade={grade} age={age} />}
    </div>
  );
};

export default ProgramCard;
