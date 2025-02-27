import React from "react";

export const TagsSection = ({
  eligibility,
  areaOfInterest,
  cost,
  type,
  season,
}) => {
  const getInterestColor = () => {
    return "bg-[#4169E1] text-white";
  };

  const getCostColor = () => {
    return "bg-[#D1ECF1] text-[#0C5460]";
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {eligibility && eligibility !== "None" && eligibility !== "N/A" && (
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(eligibility)
            ? eligibility
            : eligibility.split(",")
          ).map((elig, index) => (
            <span
              key={index}
              className={
                "bg-[#FFD700] text-[#333333] text-xs font-medium px-2 py-1 rounded"
              }
            >
              {elig.trim()}
            </span>
          ))}
        </div>
      )}

      {areaOfInterest && (
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(areaOfInterest)
            ? areaOfInterest
            : areaOfInterest.split(",")
          ).map((interest, index) => (
            <span
              key={index}
              className={`${getInterestColor(
                interest
              )} text-xs font-medium px-2 py-1 rounded`}
            >
              {interest.trim()}
            </span>
          ))}
        </div>
      )}

      {cost &&
        ["Paid/Stipend", "Aid Available", "No Aid Available"].some((c) =>
          cost.includes(c)
        ) && (
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(cost) ? cost : cost.split(",")).map((c, index) => (
              <span
                key={index}
                className={`${getCostColor(
                  c
                )} text-xs font-medium px-2 py-1 rounded`}
              >
                {c.trim()}
              </span>
            ))}
          </div>
        )}

      {type && (
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(type) ? type : type.split(",")).map((t, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      )}

      {season && (
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(season) ? season : season.split(",")).map(
            (s, index) => {
              return (
                <span
                  key={index}
                  className={`bg-[#FFA500] text-[#2C3E50] text-xs font-medium px-2 py-1 rounded`}
                >
                  {s.trim()}
                </span>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};
