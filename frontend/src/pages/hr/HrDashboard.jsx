import { Link } from "react-router-dom";
import HrNavbar from "../../components/hr/HrNavbar";
import {
  initialApplicants,
  initialHrJobs,
} from "../../data/hrMockData";

function HrDashboard() {
  const jobs =
    JSON.parse(localStorage.getItem("hrJobs")) || initialHrJobs;

  const applicants =
    JSON.parse(localStorage.getItem("hrApplicants")) ||
    initialApplicants;

  const activeJobs = jobs.filter((job) => job.status === "Active");
  const shortlisted = applicants.filter(
    (applicant) => applicant.status === "Shortlisted"
  );

  return (
    <>
      <HrNavbar />

      <main className="container py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div>
            <h1 className="fw-bold">HR Dashboard</h1>
            <p className="text-secondary mb-0">
              Manage jobs, candidates and interviews.
            </p>
          </div>

          <Link className="btn btn-primary align-self-md-center" to="/hr/post-job">
            <i className="bi bi-plus-circle me-2"></i>
            Post New Job
          </Link>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <i className="bi bi-briefcase-fill fs-2 text-primary"></i>
                <h2 className="fw-bold mt-3">{jobs.length}</h2>
                <p className="text-secondary mb-0">Total Jobs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <i className="bi bi-check-circle-fill fs-2 text-success"></i>
                <h2 className="fw-bold mt-3">{activeJobs.length}</h2>
                <p className="text-secondary mb-0">Active Jobs</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <i className="bi bi-people-fill fs-2 text-warning"></i>
                <h2 className="fw-bold mt-3">{applicants.length}</h2>
                <p className="text-secondary mb-0">Applicants</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <i className="bi bi-person-check-fill fs-2 text-info"></i>
                <h2 className="fw-bold mt-3">{shortlisted.length}</h2>
                <p className="text-secondary mb-0">Shortlisted</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mt-5">
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold mb-0">Recent Applicants</h3>

              <Link className="btn btn-outline-primary" to="/hr/applicants">
                View All
              </Link>
            </div>

            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Job</th>
                    <th>Experience</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {applicants.slice(0, 5).map((applicant) => (
                    <tr key={applicant.id}>
                      <td>
                        <strong>{applicant.name}</strong>
                        <small className="d-block text-secondary">
                          {applicant.email}
                        </small>
                      </td>
                      <td>{applicant.jobTitle}</td>
                      <td>{applicant.experience}</td>
                      <td>
                        <span className="badge text-bg-warning">
                          {applicant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HrDashboard;