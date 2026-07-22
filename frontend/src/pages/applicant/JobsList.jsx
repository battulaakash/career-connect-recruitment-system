import { useState } from "react";
import { Link } from "react-router-dom";
import ApplicantNavbar from "../../components/applicant/ApplicantNavbar";
import { jobs } from "../../data/jobs";

function JobsList() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );

    const matchesLocation =
      !location ||
      job.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  const saveJob = (job) => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    const alreadySaved = savedJobs.some(
      (savedJob) => savedJob.id === job.id
    );

    if (alreadySaved) {
      alert("Job already saved.");
      return;
    }

    localStorage.setItem(
      "savedJobs",
      JSON.stringify([...savedJobs, job])
    );

    alert("Job saved successfully.");
  };

  return (
    <>
      <ApplicantNavbar />

      <div className="container py-5">
        <div className="mb-4">
          <h1 className="fw-bold">Browse Jobs</h1>
          <p className="text-secondary">
            Search and apply for opportunities matching your skills.
          </p>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="Search by title, company or skill"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <div className="col-md-4">
                <input
                  className="form-control"
                  placeholder="Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </div>

              <div className="col-md-2">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => {
                    setSearch("");
                    setLocation("");
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-secondary">
          {filteredJobs.length} jobs found
        </p>

        <div className="row g-4">
          {filteredJobs.map((job) => (
            <div className="col-lg-6" key={job.id}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 className="fw-bold">{job.title}</h4>
                      <p className="text-primary fw-semibold">
                        {job.company}
                      </p>
                    </div>

                    <button
                      className="btn btn-outline-primary"
                      onClick={() => saveJob(job)}
                    >
                      <i className="bi bi-bookmark"></i>
                    </button>
                  </div>

                  <div className="d-flex flex-wrap gap-3 text-secondary mb-3">
                    <span>
                      <i className="bi bi-geo-alt me-1"></i>
                      {job.location}
                    </span>

                    <span>
                      <i className="bi bi-briefcase me-1"></i>
                      {job.jobType}
                    </span>

                    <span>
                      <i className="bi bi-cash-stack me-1"></i>
                      {job.salary}
                    </span>
                  </div>

                  <div className="mb-4">
                    {job.skills.map((skill) => (
                      <span
                        className="badge text-bg-light border me-2 mb-2"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    className="btn btn-primary"
                    to={`/applicant/jobs/${job.id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search fs-1 text-secondary"></i>
              <h4 className="mt-3">No jobs found</h4>
              <p className="text-secondary">
                Try changing your search filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default JobsList;