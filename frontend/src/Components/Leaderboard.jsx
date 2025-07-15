import React from "react";
import Loading from "./Loading";
import { MdLeaderboard } from "react-icons/md";

const Leaderboard = ({ users }) => {
  return (
    <>
      <hr />
      <h1 className="text-center font-semibold mt-8 flex justify-center items-center gap-2 text-xl sm:text-2xl">
        <MdLeaderboard className="text-yellow-500" />
        Leaderboard
      </h1>

      <div className="mt-4 w-full px-2">
        {users.length === 0 ? (
          <div className="text-center m-10">
            <Loading />
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead className="bg-base-200">
                <tr>
                  <th className="text-xs sm:text-sm">Rank</th>
                  <th className="text-xs sm:text-sm">Profile</th>
                  <th className="text-xs sm:text-sm">Name</th>
                  <th className="text-xs sm:text-sm">Total Points</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, id) => (
                  <tr key={user._id}>
                    <td className="text-xs sm:text-base">{id + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                          <img
                            src={
                              user.profilePic
                                ? `https://leaderboard-3w.onrender.com${user.profilePic}`
                                : "https://img.daisyui.com/images/profile/demo/2@94.webp"
                            }
                            alt="profile"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-xs sm:text-base">{user.name}</td>
                    <td>
                      <button className="btn btn-ghost text-xs sm:text-base">
                        {user.totalPoints}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <hr />
    </>
  );
};

export default Leaderboard;
