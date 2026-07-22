import ApplicantNavbar from "../../components/applicant/ApplicantNavbar";

function AppliedJobs() {
  const appliedJobs =
    JSON.parse(localStorage.getItem("appliedJobs")) || [];

  return (
    <>
      <ApplicantNavbar />

      <div className="container py-5">
        <h1 className="fw-bold">Applied Jobs</h1>
        <p className="text-secondary">
          Track the status of your job applications.
        </p>

        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body p-4">
            {appliedJobs.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-send fs-1 text-secondary"></i>
                <h4 className="mt-3">No applications yet</h4>
                <p className="text-secondary">
                  Start applying for available jobs.
                </p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Job</th>
                      <th>Company</th>
                      <th>Applied Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {appliedJobs.map((job) => (
                      <tr key={job.id}>
                        <td className="fw-semibold">{job.title}</td>
                        <td>{job.company}</td>
                        <td>{job.appliedDate}</td>
                        <td>
                          <span className="badge text-bg-warning">
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AppliedJobs;