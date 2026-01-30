import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { PatientProfile } from "./pages/PatientProfile"
import { Doctors } from "./pages/Doctors"
import { BookAppointment } from "./pages/BookAppointment"
import { PatientBookings } from "./pages/PatientBookings"
import { DoctorDashboard } from "./pages/DoctorDashboard"
import { AdminDashboard } from "./pages/AdminDashboard"
import { DoctorsManagement } from "./pages/DoctorsManagement"
import { Login } from "./pages/Login"
import { TimeManagement } from "./pages/TimeManagement"


function App() {

  return (
    <>
    <Routes>
      {/* no auth */}
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/login" element={<Login />} />
      {/* patient */}
      <Route path="/patient" element={<PatientProfile />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/bookings" element={<PatientBookings />} />
      {/* doctor */}
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/work-times" element={<TimeManagement />} />
      {/* admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/manage-doctors" element={<DoctorsManagement />} />
    </Routes>
      
    </>
  )
}

export default App
