/**
 * Filter options configuration for program/opportunity search functionality
 * @type {Array<FilterCategory>}
 */

/**
 * @typedef {Object} FilterCategory
 * @property {string} label - Display name for the filter category
 * @property {string} key - Unique identifier for the filter category
 * @property {string[]} options - Available filter options within the category
 */

export const filterOptions = [
  {
    label: "Season",
    key: "season",
    options: [
      "Summer",
      "Fall",
      "Winter",
      "Spring",
      "Year Round",
      "Long Term",
      "1+ Years",
      "<= 1 Month",
    ],
  },
  {
    label: "Cost",
    key: "cost",
    options: [
      "Paid/Stipend",
      "Free",
      // "Aid Available",
      // "No Aid Available",
      "$1-100",
      "$101-500",
      "$501-1000",
      "$1000+",
    ],
  },
  {
    label: "Location",
    key: "location",
    options: ["NYC", "Residential", "Virtual", "Hybrid"],
  },
  {
    label: "Type",
    key: "type",
    options: [
      "Research",
      "STEM Research",
      "Non-STEM Research",
      "Mentored",
      "Lab Research",
      "Program",
      "Start-Up Creation",
    ],
  },
  {
    label: "Area of Interest",
    key: "areaOfInterest",
    options: [
      "Business",
      "Entrepreneurship",
      "Finance",
      "Accounting",
      "Marketing",
      "Science",
      "Technology",
      "Health",
      "Biology",
      "Chemistry",
      "Genetics",
      "Environmental",
      "Computer Science",
      "Biochemistry",
      "Social Advocacy",
      "Math",
      "Physics",
      "Engineering",
    ],
  },
  {
    label: "Age",
    key: "age",
    options: ["13", "14", "15", "16", "17", "18", "19"],
  },
  {
    label: "Grade",
    key: "grade",
    options: ["Freshman", "Sophomore", "Junior", "Senior"],
  },
  {
    label: "Eligibility",
    key: "eligibility",
    options: ["Female", "Minority", "Male-Identifying Students"],
  },
];
