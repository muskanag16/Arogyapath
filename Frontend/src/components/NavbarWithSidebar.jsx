
import React, { useState } from "react";
import {
  Bell,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  UserPlus,
  FileText,
  Video,
  Activity,
  Download,
  Upload,
  FolderOpen,
  History,
  UserCog
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {useFirebase} from "../Context/Firebase";

const NavbarWithSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [therapyDropdownOpen, setTherapyDropdownOpen] = useState(false);
  const [medicalSubOpen, setMedicalSubOpen] = useState(false);
  const navigate = useNavigate();
  const {user}=useFirebase();
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <h1 className="flex items-center space-x-2 text-xl font-bold text-blue-700">
  <img src="/images/arogya.png" alt="Arogya Logo" className="h-20 w-auto" />
  
</h1>
        </div>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          {/* Spiritual Therapy with Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1"
              onClick={() => setTherapyDropdownOpen(!therapyDropdownOpen)}
            >
              Spiritual Therapy{" "}
              {therapyDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {therapyDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white border rounded shadow w-60 z-20 p-3">
                <div
                  className="mb-3 cursor-pointer"
                  onClick={() => navigate("/bhajans")}
                >
                  <p className="font-semibold text-blue-600">Bhajans</p>
                  <p className="text-sm text-gray-600">
                    Peaceful devotional songs to calm your mind and soul.
                  </p>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => navigate("/mantras")}
                >
                  <p className="font-semibold text-blue-600">Mantras</p>
                  <p className="text-sm text-gray-600">
                    Recite powerful mantras to restore balance and focus.
                  </p>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600">
            Yoga
          </a>
          <a href="#" className="hover:text-blue-600">
            Find a Doctor
          </a>
        </div>

        <div className="flex items-center gap-4 relative">
  

  {user && (
   <>
  <Bell className="text-gray-600" />
  <button
    onClick={() => navigate("/book-appointment")}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    Book Appointment
  </button>
   </>
)}

  {/* User Account Icon */}
  <div className="ml-14 relative group mr-12">
    <FaUserCircle size={45} onClick={() => navigate("/auth")} className="text-gray-600 cursor-pointer" />
    
    <div className="absolute -right-12 top-full mt-2 w-56 bg-white shadow-lg rounded-lg hidden group-hover:block z-50 p-4">
      {!user ? (
        <p className="text-sm text-gray-700">
          Please{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => navigate("/auth")}
          >
            log in
          </span>{" "}
          to access your account.
        </p>
      ) : (
        <div className="text-sm text-gray-700">
          <p><strong>Name:</strong> {user.displayName || "XYZ"}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  </div>
</div>

      </nav>

      {/* Sidebar */}
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 h-full bg-gray-100 shadow-lg z-30 p-8 w-80 flex flex-col gap-6 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <X onClick={() => setSidebarOpen(false)} className="cursor-pointer" />
        </div>
        <nav className="flex flex-col gap-4">
         {!user ? (
          <button
          onClick={() => navigate("/auth")}
          className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
          >
          <UserPlus size={24} className="text-blue-600" />
              Login / Signup
          </button>

         ):(
          <>
          <button
          onClick={() => navigate("/account-detail")}
          className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
          >
          <UserCog size={24} className="text-blue-600" />
            Account Settings
          </button>
          <div>
            <button
              onClick={() => setMedicalSubOpen(!medicalSubOpen)}
              className="flex items-center justify-between w-full p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
            >
              <span className="flex items-center gap-4">
                <FileText size={24} className="text-blue-600" />
                Medical Records
              </span>
              {medicalSubOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {medicalSubOpen && (
              <div className="ml-10 mt-3 flex flex-col gap-2">
                <button className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-gray-700 text-sm">
                  <Upload size={18} className="text-blue-600" />
                  Upload Reports
                </button>
                <button className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-gray-700 text-sm">
                  <FolderOpen size={18} className="text-blue-600" />
                  View Reports
                </button>
                <button className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-gray-700 text-sm">
                  <History size={18} className="text-blue-600" />
                  Health History
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/consultation")}
            className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
          >
            <Video size={24} className="text-blue-600" />
            Online Consultation
          </button>

          <button
            onClick={() => navigate("/health-tracker")}
            className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
          >
            <Activity size={24} className="text-blue-600" />
            Health Tracker
          </button>

          <button
            onClick={() => navigate("/prescriptions")}
            className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
          >
            <Download size={24} className="text-blue-600" />
            Prescription Downloads
          </button>
          </>
         )
         }
          {/* Medical Records with Dropdown */}
          
        </nav>
      </div>
    </div>
  );
};

export default NavbarWithSidebar;
