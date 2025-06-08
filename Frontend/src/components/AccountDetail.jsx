import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useFirebase } from "../Context/firebase";

function AccountDetail() {
    const { user } = useFirebase();
    const navigate = useNavigate();

    if (!user) {
      navigate("/");
      return null;
    }

    async function Logout() {
        try {
            await signOut(getAuth());
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Failed to log out. Please try again.");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">
    Hello, {user.email}
  </h1>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Username
    </label>
    <input
      type="text"
      placeholder="Enter your new username"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
  >
    Change Username
  </button>

  <div className="mt-6 border-t pt-4">
    <button
      onClick={Logout}
      className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 font-medium"
    >
      Logout
    </button>
  </div>
</div>

    );
}

export default AccountDetail;
