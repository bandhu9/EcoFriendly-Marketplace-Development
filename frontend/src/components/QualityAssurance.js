import React from "react";

const QualityAssurance = ({ isEcoFriendly }) => {
  return (
    <div className="quality-assurance">
      <p>Quality Assurance</p>
      <p className={isEcoFriendly ? "eco-friendly" : "not-eco-friendly"}>
        {isEcoFriendly ? "Eco-Friendly" : "Not Eco-Friendly"}
      </p>
    </div>
  );
};

export default QualityAssurance;
