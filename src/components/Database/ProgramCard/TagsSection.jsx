import React, { useState, useRef, useEffect } from "react";

export const TagsSection = ({
  eligibility,
  areaOfInterest,
  cost,
  type,
  season,
}) => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [maxVisibleTags, setMaxVisibleTags] = useState(Infinity);

  // Prepare all tags for measurement and rendering
  const getAllTags = () => {
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

  // Get class name for a tag based on its type
  const getTagClassName = (tagType) => {
    switch (tagType) {
      case "eligibility":
        return "bg-[#FFD700] text-[#333333]";
      case "areaOfInterest":
        return "bg-[#4169E1] text-white";
      case "cost":
        return "bg-[#D1ECF1] text-[#0C5460]";
      case "type":
        return "bg-green-100 text-green-600";
      case "season":
        return "bg-[#FFA500] text-[#2C3E50]";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  // Check if tags are overflowing
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;

      // If already expanded, show all tags
      if (expanded) {
        setMaxVisibleTags(Infinity);
        setIsOverflowing(false);
        return;
      }

      // Reset to show all tags for measurement
      setMaxVisibleTags(Infinity);

      // Wait for DOM update
      setTimeout(() => {
        if (!containerRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const tagElements = Array.from(
          containerRef.current.querySelectorAll(".tag-item")
        );

        // If no tags, exit early
        if (tagElements.length === 0) {
          setIsOverflowing(false);
          return;
        }

        let currentWidth = 0;
        let visibleCount = 0;

        // Reserve space for "more" button (approximately 80px)
        const moreButtonWidth = 80;

        for (let i = 0; i < tagElements.length; i++) {
          const tag = tagElements[i];
          // Include tag width plus gap (8px)
          const tagWidth = tag.offsetWidth + 8;

          // If adding this tag would overflow (accounting for "more" button)
          if (
            currentWidth +
              tagWidth +
              (i < tagElements.length - 1 ? moreButtonWidth : 0) >
            containerWidth
          ) {
            break;
          }

          currentWidth += tagWidth;
          visibleCount++;
        }

        // Ensure we show at least one tag
        visibleCount = Math.max(1, visibleCount);

        // If we can show all tags, no truncation needed
        if (visibleCount >= tagElements.length) {
          setIsOverflowing(false);
          setMaxVisibleTags(Infinity);
        } else {
          setIsOverflowing(true);
          setMaxVisibleTags(visibleCount);
        }
      }, 10);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [expanded, eligibility, areaOfInterest, cost, type, season]);

  const allTags = getAllTags();
  const visibleTags = expanded ? allTags : allTags.slice(0, maxVisibleTags);
  const hiddenCount = allTags.length - visibleTags.length;

  return (
    <div ref={containerRef} className="flex flex-wrap gap-2 mt-2 relative">
      {visibleTags.map((tag, index) => (
        <span
          key={`${tag.type}-${index}`}
          className={`tag-item ${getTagClassName(
            tag.type
          )} text-xs font-medium px-2 py-1 rounded`}
        >
          {tag.text}
        </span>
      ))}

      {isOverflowing && !expanded && hiddenCount > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="tag-item bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded hover:bg-gray-300 transition-colors"
        >
          +{hiddenCount} more...
        </button>
      )}

      {expanded && hiddenCount > 0 && (
        <button
          onClick={() => setExpanded(false)}
          className="tag-item bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded hover:bg-blue-200 transition-colors ml-1"
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default TagsSection;
