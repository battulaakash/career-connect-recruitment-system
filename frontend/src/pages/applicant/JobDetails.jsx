import { Link, useNavigate, useParams } from "react-router-dom";
import ApplicantNavbar from "../../components/applicant/ApplicantNavbar";
import { jobs } from "../../data/jobs";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <>
        <ApplicantNavbar />

        <div className="container py-5 text-center">
          <h2>Job not found</h2>
          <Link to="/applicant/jobs" className="btn btn-primary mt-3">
            Return to Jobs
          </Link>
        </div>
      </>
    );
  }

  const applyJob = () => {
    const appliedJobs =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    const alreadyApplied = appliedJobs.some(
      (appliedJob) => appliedJob.id === job.id
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    const application = {
      ...job,
      status: "Applied",
      appliedDate: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify([...appliedJobs, application])
    );

    alert("Application submitted successfully.");
    navigate("/applicant/applied-jobs");
  };

  return (
    <>
      <ApplicantNavbar />

      <div className="container py-5">
        <Link to="/applicant/jobs" className="text-decoration-none">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Jobs
        </Link>

        <div className="row g-4 mt-2">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <h1 className="fw-bold">{job.title}</h1>
                <h5 className="text-primary">{job.company}</h5>

                <div className="d-flex flex-wrap gap-3 text-secondary my-4">
                  <span>
                    <i className="bi bi-geo-alt me-2"></i>
                    {job.location}
                  </span>

                  <span>
                    <i className="bi bi-briefcase me-2"></i>
                    {job.jobType}
                  </span>

                  <span>
                    <i className="bi bi-clock me-2"></i>
                    {job.experience}
                  </span>

                  <span>
                    <i className="bi bi-cash-stack me-2"></i>
                    {job.salary}
                  </span>
                </div>

                <hr />

                <h4 className="fw-bold mt-4">Job Description</h4>
                <p className="text-secondary lh-lg">
                  {job.description}
                </p>

                <h4 className="fw-bold mt-4">Required Skills</h4>

                <div>
                  {job.skills.map((skill) => (
                    <span
                      className="badge rounded-pill text-bg-primary me-2 mb-2 p-2"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold">Interested?</h4>
                <p className="text-secondary">
                  Apply now and track your application.
                </p>

                <button
                  className="btn btn-primary w-100"
                  onClick={applyJob}
                >
                  Apply Now
                </button>

                <p className="small text-secondary text-center mt-3 mb-0">
                  Posted {job.postedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;