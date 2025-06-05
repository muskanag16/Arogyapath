// NavbarWithSidebar.jsx
// import React, { useState } from "react";
// import {
//     Bell,
//     Menu,
//     X,
//     ChevronDown,
//     ChevronUp,
//     UserPlus,
//     FileText,
//     Video,
//     Activity,
//     Download,
//     Upload,
//     FolderOpen,
//     History,
//   } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const NavbarWithSidebar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [therapyDropdownOpen, setTherapyDropdownOpen] = useState(false);
//   const [medicalSubOpen, setMedicalSubOpen] = useState(false);

//   const navigate = useNavigate();
 
//   return (
//     <div className="relative">
//       {/* Navbar */}
//       <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//             {sidebarOpen ? <X /> : <Menu />}
//           </button>
//           <h1 className="text-xl font-bold text-blue-700">MindHealer</h1>
//         </div>

//         <div className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
//           {/* Spiritual Therapy with Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center gap-1"
//               onClick={() => setTherapyDropdownOpen(!therapyDropdownOpen)}
//             >
//               Spiritual Therapy <ChevronDown size={16} />
//             </button>
//             {therapyDropdownOpen && (
//               <div className="absolute top-full mt-2 bg-white border rounded shadow w-60 z-20 p-3">
//                 <div className="mb-3">
//                   <p className="font-semibold text-blue-600">Bhajans</p>
//                   <p className="text-sm text-gray-600">
//                     Peaceful devotional songs to calm your mind and soul.
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-blue-600">Mantras</p>
//                   <p className="text-sm text-gray-600">
//                     Recite powerful mantras to restore balance and focus.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           <a href="#">Yoga</a>
//           <a href="#">Find a Doctor</a>
//         </div>

//         <div className="flex items-center gap-4">
//           <Bell className="text-gray-600" />
//           <button
//             onClick={() => navigate("/book-appointment")}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Book Appointment
//           </button>
//         </div>
//       </nav>

//       {/* Sidebar with smooth transition */}
//       <div
//   className={`transition-transform duration-300 fixed top-0 left-0 h-full bg-gray-100 shadow-lg z-30 p-8 w-80 flex flex-col gap-6 ${
//     sidebarOpen ? "translate-x-0" : "-translate-x-full"
//   }`}
// >
//   <div className="flex justify-between items-center mb-8">
//     <h2 className="text-xl font-bold">Menu</h2>
//     <X onClick={() => setSidebarOpen(false)} className="cursor-pointer" />
//   </div>
//   <nav className="flex flex-col gap-4">
//     <button className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg">
//       <UserPlus size={24} className="text-blue-600" />
//       Login / Signup
//     </button>
//     <button className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg">
//     <div>
//   <button
//     onClick={() => setMedicalSubOpen(!medicalSubOpen)}
//     className="flex items-center justify-between w-full p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
//   >
//     <span className="flex items-center gap-4">
//       <FileText size={24} className="text-blue-600" />
//       Medical Records
//     </span>
//     {medicalSubOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//   </button>

//   {medicalSubOpen && (
//     <div className="ml-10 mt-3 flex flex-col gap-2">
//       <button className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-gray-700 text-sm">
//         <Upload size={18} className="text-blue-600" />
//         Upload Reports
//       </button>
//       <button className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-gray-700 text-sm">
//         <FolderOpen size={18} className="text-blue-600" />
//         View Reports
//       </button>
//       <button className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-gray-700 text-sm">
//         <History size={18} className="text-blue-600" />
//         Health History
//       </button>
//     </div>
//   )}
// </div>
     
//     </button>
//     <button className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg">
//       <Video size={24} className="text-blue-600" />
//       Online Consultation
//     </button>
//     <button className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg">
//       <Activity size={24} className="text-blue-600" />
//       Health Tracker
//     </button>
//     <button className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg">
//       <Download size={24} className="text-blue-600" />
//       Prescription Downloads
//     </button>
//   </nav>
// </div>
// </div>
//   );
// };

// export default NavbarWithSidebar;
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavbarWithSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [therapyDropdownOpen, setTherapyDropdownOpen] = useState(false);
  const [medicalSubOpen, setMedicalSubOpen] = useState(false);
  const navigate = useNavigate();

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

        <div className="flex items-center gap-4">
          <Bell className="text-gray-600" />
          <button
            onClick={() => navigate("/book-appointment")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book Appointment
          </button>
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
          {/* <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
          >
            <UserPlus size={24} className="text-blue-600" />
            Login / Signup
          </button> */}
          <button
 onClick={() => navigate("/auth")}
  className="flex items-center gap-4 p-4 rounded-md bg-white hover:bg-blue-100 shadow-md text-gray-700 font-semibold text-lg"
>
  <UserPlus size={24} className="text-blue-600" />
  Login / Signup
</button>

          {/* Medical Records with Dropdown */}
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
        </nav>
      </div>
    </div>
  );
};

export default NavbarWithSidebar;
