import React, { useRef } from 'react';

const Userselect = ({ users, selectedUser, setSelectedUser }) => {
  const dropdownRef = useRef(null);

  const handleSelect = (userId) => {
    setSelectedUser(userId);
    if (dropdownRef.current) {
      dropdownRef.current.removeAttribute("open");
    }
  };

  return (
    <div>
      <details ref={dropdownRef} className="dropdown">
        <summary className="btn m-1">
          {selectedUser
            ? users.find((u) => u._id === selectedUser)?.name || "User"
            : "Select a User"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
          {users.map((user) => (
            <li key={user._id}>
              <a
                onClick={() => handleSelect(user._id)}
                className={selectedUser === user._id ? "font-bold" : ""}
              >
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </details>
      <p>Select User to Claim Points</p>
    </div>
  );
};

export default Userselect;
