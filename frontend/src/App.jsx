import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import ApplicantDashboard from "./pages/applicant/ApplicantDashboard";
import HrDashboard from "./pages/hr/HrDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={
          <div className="container py-5">
            <h1>Applicant Registration</h1>
            <p>Registration form will be created next.</p>
          </div>
        }
      />

      <Route
        path="/jobs"
        element={
          <div className="container py-5">
            <h1>Available Jobs</h1>
            <p>Job listing UI will be created next.</p>
          </div>
        }
      />

      <Route
        path="/applicant/dashboard"
        element={<ApplicantDashboard />}
      />

      <Route path="/hr/dashboard" element={<HrDashboard />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;