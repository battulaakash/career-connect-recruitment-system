import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HrNavbar from "../../components/hr/HrNavbar";
import { initialHrJobs } from "../../data/hrMockData";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("hrJobs"));

    const availableJobs = Array.isArray(storedJobs)
      ? storedJobs
      : initialHrJobs;

    setJobs(availableJobs);

    if (!storedJobs) {
      localStorage.setItem("hrJobs", JSON.stringify(initialHrJobs));
    }
  }, []);

  const saveJobs = (updatedJobs) => {
    setJobs(updatedJobs);
    localStorage.setItem("hrJobs", JSON.stringify(updatedJobs));
  };

  const toggleJobStatus = (jobId) => {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId
        ? {
            ...job,
            status: job.status === "Active" ? "Closed" : "Active",
          }
        : job
    );

    saveJobs(updatedJobs);
  };

  const deleteJob = (jobId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmed) {
      return;
    }

    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    saveJobs(updatedJobs);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <HrNavbar />

      <main className="container py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div>
            <h1 className="fw-bold">Manage Jobs</h1>
            <p className="text-secondary mb-0">
              View, close, reopen or delete your job postings.
            </p>
          </div>

          <Link className="btn btn-primary align-self-md-center" to="/hr/post-job">
            <i className="bi bi-plus-circle me-2"></i>
            Post New Job
          </Link>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-8">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-search"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title, department or location"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                >
                  <option value="All">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="ps-4">Job</th>
                    <th>Location</th>
                    <th>Openings</th>
                    <th>Applicants</th>
                    <th>Status</th>
                    <th>Posted Date</th>
                    <th className="text-end pe-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <tr key={job.id}>
                        <td className="ps-4">
                          <strong>{job.title}</strong>
                          <small className="d-block text-secondary">
                            {job.department} · {job.jobType}
                          </small>
                        </td>

                        <td>{job.location}</td>
                        <td>{job.openings}</td>
                        <td>{job.applicants}</td>

                        <td>
                          <span
                            className={`badge ${
                              job.status === "Active"
                                ? "text-bg-success"
                                : "text-bg-secondary"
                            }`}
                          >
                            {job.status}
                          </span>
                        </td>

                        <td>{job.postedDate}</td>

                        <td className="text-end pe-4">
                          <button
                            type="button"
                            className={`btn btn-sm me-2 ${
                              job.status === "Active"
                                ? "btn-outline-warning"
                                : "btn-outline-success"
                            }`}
                            onClick={() => toggleJobStatus(job.id)}
                          >
                            {job.status === "Active" ? "Close" : "Reopen"}
                          </button>

                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteJob(job.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-5">
                        <i className="bi bi-briefcase fs-1 text-secondary"></i>
                        <p className="text-secondary mt-3 mb-0">
                          No matching jobs found.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ManageJobs;