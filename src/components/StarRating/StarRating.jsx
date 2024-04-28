import React, { useState } from "react";
import "./StarRating.css";

function StarRating() {
  const [selectedStarRatingCount, setSelectedRatingCount] = useState(0);
  const [hoveredStarRatingCount, setHoveredStarRatingCount] = useState(0);
  return (
    <div className="container">
      <h2>Star Rating</h2>
      <div className="start-rating_container">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`star-rating_star ${
              i + 1 <= hoveredStarRatingCount ? "hovered" : ""
            } ${i + 1 <= selectedStarRatingCount ? "selected" : ""}`}
            onMouseOver={() => setHoveredStarRatingCount(i + 1)}
            onMouseOut={() => setHoveredStarRatingCount(0)}
            onClick={() => setSelectedRatingCount(i + 1)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>{selectedStarRatingCount}</p>
    </div>
  );
}

export default StarRating;
