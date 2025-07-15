import React, { useEffect, useState } from 'react';
import { fetchClaimHistory } from '../api';
import { MdHistory } from "react-icons/md";


const History = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchClaimHistory(userId).then(res => setHistory(res.data));
    }
  }, [userId]);

  if (!userId) return null;

  return (
    <ul className="list bg-base-100 rounded-box shadow-md w-full max-w-md h-screen  overflow-scroll ">
      <li className="p-4 pb-2 text-2xl opacity-60 tracking-wide flex item-center justify-center">Claim History  <MdHistory size={30}/></li>
      {history.length === 0 && <li className='text-center m-10'>No history</li>}
      {history.map((entry, index) => (
        <li key={entry._id} className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div>
            <img
              className="size-10 rounded-box"
              src={
                entry.profilePic
                  ? `http://localhost:5000${entry.profilePic}`
                  : "https://img.daisyui.com/images/profile/demo/2@94.webp"
              }
              alt="Profile"
            />
          </div>
          <div className="list-col-grow">
            <div className="font-medium">+{entry.points} points</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {new Date(entry.claimedAt).toLocaleString()}
            </div>
          </div>
         
        </li>
      ))}
    </ul>
  );
};

export default History;
