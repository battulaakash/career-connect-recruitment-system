import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import ApplicantDashboard from "./pages/applicant/ApplicantDashboard";
import HrDashboard from "./pages/hr/HrDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import JobsList from "./pages/applicant/JobsList";
import JobDetails from "./pages/applicant/JobDetails";
import AppliedJobs from "./pages/applicant/AppliedJobs";
import SavedJobs from "./pages/applicant/SavedJobs";
import ApplicantProfile from "./pages/applicant/ApplicantProfile";
import PostJob from "./pages/hr/PostJob";
import ManageJobs from "./pages/hr/ManageJobs";
import Applicants from "./pages/hr/Applicants";
import InterviewSchedule from "./pages/hr/InterviewSchedule";
import HrProfile from "./pages/hr/HrProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hr/dashboard" element={<HrDashboard />} />
      <Route path="/hr/post-job" element={<PostJob />} />
      <Route path="/hr/manage-jobs" element={<ManageJobs />} />
      <Route path="/hr/applicants" element={<Applicants />} />
      <Route path="/hr/interviews" element={<InterviewSchedule />} />
      <Route path="/hr/profile" element={<HrProfile />} />
      <Route
        path="/register"
        element={
          <div className="container py-5">
            <h1>Applicant Registration</h1>
            <p>Registration form will be created next.</p>
          </div>
        }
      />
      <Route path="/applicant/jobs" element={<JobsList />} />

      <Route path="/applicant/jobs/:id" element={<JobDetails />} />

      <Route path="/applicant/applied-jobs" element={<AppliedJobs />} />

      <Route path="/applicant/saved-jobs" element={<SavedJobs />} />

      <Route path="/applicant/profile" element={<ApplicantProfile />} />
      <Route
        path="/jobs"
        element={
          <div className="container py-5">
            <h1>Available Jobs</h1>
            <p>Job listing UI will be created next.</p>
          </div>
        }
      />

      <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />

      <Route path="/hr/dashboard" element={<HrDashboard />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
