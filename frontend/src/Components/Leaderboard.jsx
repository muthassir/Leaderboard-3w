import React from 'react';
import Loading from './Loading';
import { MdLeaderboard } from "react-icons/md";



const Leaderboard = ({ users }) => {
  
  return (
   <>
   <hr />
    <h1 className='text-center font-semibold mt-8 flex justify-center items-center text-2xl '><MdLeaderboard />Leaderboard</h1>
    <div className="overflow-x-auto mt-4 ">
    {users.length === 0 ? <div className='text-center m-10'><Loading /></div> :
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Rank</th>
        <th>Profile</th>
        <th>Name</th>
        <th>Total Points</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map((user, id) =>(
           <tr key={user._id}>
           <td>
             <div className="flex items-center gap-3">
              <div>{id+1}</div>
             
             </div>
           </td>
           <td>
           <div className="avatar">
                 <div className="mask mask-squircle h-12 w-12">
                   <img
                     src={user.profilePic ? `http://localhost:5000${user.profilePic}` : "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                     alt="Avatar Tailwind CSS Component" />
                 </div>
               </div>
           </td>
           <td>{user.name}</td>
           <th>
             <button className="btn btn-ghost lg:text-2xl btn-xs">{user.totalPoints}</button>
           </th>
         </tr> 
      ))}
     
      
    </tbody>   
  </table>}
</div>

<hr />
  
   </>
  );
};

export default Leaderboard;