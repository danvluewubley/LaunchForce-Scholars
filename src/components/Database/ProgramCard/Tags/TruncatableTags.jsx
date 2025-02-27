import React, { useState, useRef, useEffect } from "react";
import { Tag } from "./Tag"; // Assuming Tag is a component for each individual tag.
import { ToggleButton } from "./ToggleButton"; // Assuming a ToggleButton to toggle the visibility of tags.

export const TruncatableTags = ({ tags }) => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const [maxVisibleTags, setMaxVisibleTags] = useState(Infinity);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const checkOverflow = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const tagElements = Array.from(
        containerRef.current.querySelectorAll(".tag-item")
      );

      // Reset the max visible tags calculation
      let totalWidth = 0;
      let visibleTagCount = 0;

      tagElements.forEach((tag, index) => {
        const tagWidth = tag.offsetWidth + 8; // Tag width + margin

        // If the tag would overflow, stop counting
        if (totalWidth + tagWidth > containerWidth) {
          setIsOverflowing(true);
          return;
        }

        totalWidth += tagWidth;
        visibleTagCount++;
      });

      // If we have overflow, set the max visible tags count
      if (visibleTagCount < tags.length) {
        setMaxVisibleTags(visibleTagCount);
      } else {
        setIsOverflowing(false);
      }
    };

    // Run overflow check on initial render
    checkOverflow();

    // Run overflow check on window resize
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [tags, expanded]);

  // Determine the tags to display based on the expanded state
  const visibleTags = expanded ? tags : tags.slice(0, maxVisibleTags);
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <div ref={containerRef} className="flex flex-wrap gap-2 mt-2 relative">
      {visibleTags.map((tag, index) => (
        <Tag
          key={`${tag.type}-${index}`}
          text={tag.text}
          type={tag.type}
          className="tag-item"
        />
      ))}

      {isOverflowing && !expanded && hiddenCount > 0 && (
        <ToggleButton
          expanded={false}
          count={hiddenCount}
          onClick={() => setExpanded(true)}
        />
      )}

      {expanded && hiddenCount > 0 && (
        <ToggleButton
          expanded={true}
          count={hiddenCount}
          onClick={() => setExpanded(false)}
        />
      )}
    </div>
  );
};
