// AppointmentPage.jsx
// AppointmentPage.jsx
// AppointmentPage.jsx
import React from "react";
import { CalendarCheck, UserCheck, Stethoscope, Send, MailCheck } from "lucide-react";

const AppointmentPage = () => {
  return (
    <div>
      {/* Header Image with More Height */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ascbuffalo.com/wp-content/uploads/2017/05/page-banner-clinical-request-appointment1.jpg')",
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center">
       
          </h1>
        </div>
      </div>

      {/* Main Section: How It Works + Form */}
 {/* Outer container with background color */}
<div className="bg-blue-50 py-10"> {/* Change bg-blue-50 to any color you like */}

{/* Main Section: How It Works + Form */}
<div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
  {/* How It Works Section with Icons and Image at Bottom */}
  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">How It Works</h2>

      <div className="space-y-6 text-gray-700">
        <div className="flex items-start space-x-4">
          <CalendarCheck className="w-6 h-6 text-blue-600 mt-1" />
          <p><strong>Select</strong> your preferred date and time.</p>
        </div>

        <div className="flex items-start space-x-4">
          <UserCheck className="w-6 h-6 text-blue-600 mt-1" />
          <p><strong>Fill</strong> in your personal details accurately.</p>
        </div>

        <div className="flex items-start space-x-4">
          <Stethoscope className="w-6 h-6 text-blue-600 mt-1" />
          <p><strong>Choose</strong> your doctor and specialization.</p>
        </div>

        <div className="flex items-start space-x-4">
          <Send className="w-6 h-6 text-blue-600 mt-1" />
          <p><strong>Click Confirm</strong> to schedule the appointment.</p>
        </div>

        <div className="flex items-start space-x-4">
          <MailCheck className="w-6 h-6 text-blue-600 mt-1" />
          <p><strong>Receive</strong> confirmation via email/SMS.</p>
        </div>
      </div>
    </div>

    {/* Image at the bottom of the box */}
    <div className="mt-8">
      <img
        src="https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg"
        alt="How it works illustration"
        className="w-full h-52 object-cover rounded-md shadow"
      />
    </div>
  </div>

  {/* Appointment Form */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Half of Form */}
      <div className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
        <input type="number" placeholder="Age" className="w-full p-3 border rounded" />
        <select className="w-full p-3 border rounded">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded" />
      </div>

      {/* Right Half of Form */}
      <div className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <input type="text" placeholder="City" className="w-full p-3 border rounded" />
        <input type="date" className="w-full p-3 border rounded" />
        <input type="time" className="w-full p-3 border rounded" />
        <input type="text" placeholder="Select a Doctor" className="w-full p-3 border rounded" />
        <input type="text" placeholder="Specialization" className="w-full p-3 border rounded" />
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 mt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 text-lg"
        >
          Confirm Appointment
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</div>
)
}
export default AppointmentPage;
