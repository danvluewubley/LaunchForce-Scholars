import React, { useState, useRef, useEffect } from "react";
import { Tag } from "./Tag";
import { ToggleButton } from "./ToggleButton";

export const TruncatableTags = ({ tags }) => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [maxVisibleTags, setMaxVisibleTags] = useState(Infinity);

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
  }, [expanded, tags]);

  const visibleTags = expanded ? tags : tags.slice(0, maxVisibleTags);
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <div ref={containerRef} className="flex flex-wrap gap-2 mt-2 relative">
      {visibleTags.map((tag, index) => (
        <Tag key={`${tag.type}-${index}`} text={tag.text} type={tag.type} />
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
