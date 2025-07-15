import React from 'react';
import { TiUserAdd } from "react-icons/ti";

const Adduser = ({ name, setName, file, setFile, fileInputRef, handleAddUser, loading }) => {
  return (
    <div className='h-screen'>
      <h1 className="text-2xl font-semibold mb-4 text-center">Add User</h1>
      <form onSubmit={handleAddUser} className='flex flex-col justify-center items-center gap-8 mt-9'>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          autoComplete="name"
          required
          className="input input-bordered w-full "
        />

        <input
          type="file"
          name="profilePic"
          id="profilePic"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
          autoComplete="photo"
          className="file-input file-input-bordered w-full "
          ref={fileInputRef}
        />

        {file && (
          <p className="text-sm text-gray-500">Selected: {file.name}</p>
        )}

        <button type="submit" className="btn btn-primary w-full text-2xl" disabled={loading}>
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <>
              <TiUserAdd /> Add
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Adduser;
