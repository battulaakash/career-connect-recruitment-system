import { useState } from "react";
import { Link } from "react-router-dom";
import ApplicantNavbar from "../../components/applicant/ApplicantNavbar";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  );

  const removeJob = (id) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== id);

    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    setSavedJobs(updatedJobs);
  };

  return (
    <>
      <ApplicantNavbar />

      <div className="container py-5">
        <h1 className="fw-bold">Saved Jobs</h1>
        <p className="text-secondary">
          Jobs you bookmarked for later.
        </p>

        <div className="row g-4 mt-2">
          {savedJobs.map((job) => (
            <div className="col-lg-6" key={job.id}>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="fw-bold">{job.title}</h4>
                  <p className="text-primary">{job.company}</p>

                  <p className="text-secondary">
                    <i className="bi bi-geo-alt me-2"></i>
                    {job.location}
                  </p>

                  <div className="d-flex gap-2">
                    <Link
                      className="btn btn-primary"
                      to={`/applicant/jobs/${job.id}`}
                    >
                      View Details
                    </Link>

                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeJob(job.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {savedJobs.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-bookmark fs-1 text-secondary"></i>
              <h4 className="mt-3">No saved jobs</h4>
              <p className="text-secondary">
                Save jobs while browsing opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SavedJobs;