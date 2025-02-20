export const TagsSection = ({
  eligibility,
  areaOfInterest,
  cost,
  type,
  season,
}) => {
  const getInterestColor = (interest) => {
    const colorMap = {
      Business: "bg-blue-100 text-blue-600",
      Entrepreneurship: "bg-teal-100 text-teal-600",
      Finance: "bg-green-100 text-green-600",
      Accounting: "bg-gray-100 text-gray-600",
      Marketing: "bg-red-100 text-red-600",
      Science: "bg-yellow-100 text-yellow-600",
      Technology: "bg-indigo-100 text-indigo-600",
      Health: "bg-pink-100 text-pink-600",
      Biology: "bg-green-100 text-green-600",
      Chemistry: "bg-blue-100 text-blue-600",
      Genetics: "bg-purple-100 text-purple-600",
      Environmental: "bg-lime-100 text-lime-600",
      "Computer Science": "bg-teal-100 text-teal-600",
      Biochemistry: "bg-pink-100 text-pink-600",
      "Social Advocacy": "bg-orange-100 text-orange-600",
      Math: "bg-blue-200 text-blue-800",
      Physics: "bg-purple-200 text-purple-800",
      Engineering: "bg-red-200 text-red-800",
    };
    return colorMap[interest.trim()] || "bg-black text-white";
  };

  const getCostColor = (costValue) => {
    const colorMap = {
      "Paid/Stipend": "bg-green-100 text-green-600",
      "Aid Available": "bg-teal-100 text-teal-600",
      "No Aid Available": "bg-red-100 text-red-600",
    };
    return colorMap[costValue.trim()] || "";
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
              className={`${
                elig.trim() === "Minority"
                  ? "bg-purple-100 text-purple-600"
                  : elig.trim() === "Female"
                  ? "bg-yellow-100 text-yellow-600"
                  : elig.trim() === "Male-Identifying Students"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-black text-white"
              } text-xs font-medium px-2 py-1 rounded`}
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
        cost.includes([
          "Paid/Stipend",
          "Aid Available",
          "No Aid Available",
        ]) && (
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
              const seasonColors = {
                Summer: "bg-yellow-100 text-yellow-600",
                Fall: "bg-orange-100 text-orange-600",
                Winter: "bg-blue-100 text-blue-600",
                Spring: "bg-green-100 text-green-600",
              };

              const colorClass =
                seasonColors[s.trim()] || "bg-gray-100 text-gray-600";

              return (
                <span
                  key={index}
                  className={`${colorClass} text-xs font-medium px-2 py-1 rounded`}
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
