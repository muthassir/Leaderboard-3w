import React, { useState } from 'react';
import { GiSevenPointedStar } from "react-icons/gi";


const Claim = ({ onClaim, disabled }) => {
  const [points, setPoints] = useState(null);

  const handleClaimClick = async () => {
    const earned = await onClaim(); // should return the number of points earned
    if (earned) {
      setPoints(earned);
      setTimeout(() => setPoints(null), 1500); // hide after 1.5s
    }
  };

  return (
    <div className="mt-8 flex flex-col justify-center items-center relative h-20">
      <button onClick={handleClaimClick} disabled={disabled} className="btn btn-primary">
      <GiSevenPointedStar />
        Claim Points
      </button>

      {points !== null && (
        <div className="absolute top-0 float-up text-green-500 text-xl font-bold">
          +{points}
        </div>
      )}
    </div>
  );
};

export default Claim;
