import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected, theme }) => {
  const tagStyle = {
    Chores: { backgroundColor: "#A1B3C1" },
    Work: { backgroundColor: "#0073e6" },
    Fun: { backgroundColor: "#FF7F50" },
    Urgent: { backgroundColor: "#e74c3c" },
    default: { backgroundColor: theme ? "#2E2E2E" : "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
