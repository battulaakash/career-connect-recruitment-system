import { Link } from "react-router-dom";
import ApplicantNavbar from "../../components/applicant/ApplicantNavbar";
import { jobs } from "../../data/jobs";

function ApplicantDashboard() {
  const appliedJobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || [];

  const savedJobs =
    JSON.parse(localStorage.getItem("savedJobs")) || [];

  return (
    <>
      <ApplicantNavbar />

      <div className="container py-5">
        <div className="mb-4">
          <h1 className="fw-bold">Applicant Dashboard</h1>
          <p className="text-secondary">
            Welcome back. Track your job search and applications.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <i className="bi bi-briefcase fs-2 text-primary"></i>
                <h2 className="mt-3">{jobs.length}</h2>
                <p className="text-secondary mb-0">Available Jobs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <i className="bi bi-send-check fs-2 text-success"></i>
                <h2 className="mt-3">{appliedJobs.length}</h2>
                <p className="text-secondary mb-0">Applied Jobs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <i className="bi bi-bookmark fs-2 text-warning"></i>
                <h2 className="mt-3">{savedJobs.length}</h2>
                <p className="text-secondary mb-0">Saved Jobs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm p-3 h-100">
              <div className="card-body">
                <i className="bi bi-calendar-check fs-2 text-info"></i>
                <h2 className="mt-3">2</h2>
                <p className="text-secondary mb-0">Interviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mt-5">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h3 className="fw-bold mb-1">Recommended Jobs</h3>
                <p className="text-secondary mb-0">
                  Jobs matching your profile
                </p>
              </div>

              <Link className="btn btn-outline-primary" to="/applicant/jobs">
                View All
              </Link>
            </div>

            <div className="row g-4">
              {jobs.slice(0, 3).map((job) => (
                <div className="col-lg-4" key={job.id}>
                  <div className="border rounded-4 p-4 h-100">
                    <h5 className="fw-bold">{job.title}</h5>
                    <p className="text-primary mb-2">{job.company}</p>

                    <p className="text-secondary small">
                      <i className="bi bi-geo-alt me-2"></i>
                      {job.location}
                    </p>

                    <p className="text-secondary small">
                      <i className="bi bi-cash-stack me-2"></i>
                      {job.salary}
                    </p>

                    <Link
                      className="btn btn-primary w-100"
                      to={`/applicant/jobs/${job.id}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantDashboard;