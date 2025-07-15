import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import Gold from '../assets/InShot_20250715_083610165.png'
import Silver from '../assets/InShot_20250715_084003865.png'
import Bronze from '../assets/InShot_20250715_084028545.png'


const TopThree = ({ users }) => {
  const topThree = [...users]
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 3);

  const medalColors = ['text-yellow-500', 'text-gray-400', 'text-amber-700'];
  const medals = ['🥇', '🥈', '🥉'];
  const imgList = [Gold, Silver, Bronze]

  return (
    <div className="flex flex-wrap justify-center lg:flex-row  flex-col items-center gap-8 my-6 px-4 ">
      {topThree.map((user, index) => (
        <div
          key={user._id}
          className={`card w-60 md:w-52 shadow-lg border border-base-300 text-center bg-base-100 `}
        >
          <div className="card-body items-center p-4 relative">
            {/* Trophy animation for rank 1 */}
            {index === 0 && (
              <div className="animate-bounce text-yellow-500 text-3xl  absolute top-0 mb-3">
                <FaTrophy />
              </div>
            )}

            {/* Medal icon */}
             <div>
               <img src={imgList[index]} alt="img"  className="h-24"/>
             </div>
            {/* Avatar */}
            <div className="avatar my-2">
              <div className="w-16 mask mask-squircle">
                <img
                  src={
                    user.profilePic
                      ? `https://leaderboard-3w.onrender.com${user.profilePic}`
                      : "https://img.daisyui.com/images/profile/demo/2@94.webp"
                  }
                  alt={user.name}
                  className='16'
                />
              </div>
            </div>

            <p className="font-semibold">{user.name}</p>
            <p className="text-sm">{user.totalPoints} points</p>
            <div className={`text-2xl mt-4  ${medalColors[index]}`}>{medals[index]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopThree;
