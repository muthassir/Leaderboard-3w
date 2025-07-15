import React, { useEffect, useState, useRef } from "react";
import { fetchUsers, addUser, claimPoints } from "./api";
import Claim from "./Components/Claim";
import Leaderboard from "./Components/Leaderboard";
import Userselect from "./Components/Userselect";
import History from "./Components/History";
import TopThree from "./Components/TopThree";
import Adduser from "./Components/Adduser";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(() => {
    return localStorage.getItem("selectedUser") || "";
  });
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const loadUsers = async () => {
    const { data } = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedUser", selectedUser);
  }, [selectedUser]);

  // add user
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!name || !file) {
      alert("Both name and image are required.");
      return;
    }
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("profilePic", file);

    try {
      setLoading(true);
      await addUser(formData);
      setName("");
      setFile(null);
      fileInputRef.current.value = "";
      loadUsers();
      setLoading(false);

    } catch (error) {
      console.error(
        "Error adding user:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.error || "Error adding user");
    }
  };


  // claim points
  const handleClaim = async () => {
    if (!selectedUser) return;
    const res = await claimPoints(selectedUser);
    await loadUsers();
    return res.data.points; // assuming backend returns { points: N }
  };

  return (
    <div className="flex  items-start justify-center w-screen">
      <div className="tabs tabs-border flex flex-wrap p-6  justify-center">
        {/* Leaderboard Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab lg:text-2xl"
          aria-label="Leaderboard"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 ">
          <TopThree users={users} />
          <Leaderboard users={users} />
        </div>

        {/* Add User Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab lg:text-2xl"
          aria-label="Add"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 ">
          <Adduser
            name={name}
            setName={setName}
            file={file}
            setFile={setFile}
            fileInputRef={fileInputRef}
            handleAddUser={handleAddUser}
            loading={loading}
          />
        </div>

        {/* Claim Points Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab lg:text-2xl"
          aria-label="Claim"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
        <div className="h-screen flex  flex-col">
        <Userselect
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <Claim onClaim={handleClaim} disabled={!selectedUser} />
          <p className="text-center text-3xl mt-14 font-semibold text-success">💥Direct hit! Points claimed.</p>
        </div>
        </div>

        {/* History Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab lg:text-2xl"
          aria-label="History"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10 ">
          <History userId={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
