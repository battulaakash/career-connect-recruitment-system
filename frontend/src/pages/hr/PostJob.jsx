import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HrNavbar from "../../components/hr/HrNavbar";
import { initialHrJobs } from "../../data/hrMockData";

function PostJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    jobType: "Full Time",
    salary: "",
    openings: 1,
    description: "",
    skills: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedJobs = JSON.parse(localStorage.getItem("hrJobs"));

    const jobs = Array.isArray(storedJobs)
      ? storedJobs
      : initialHrJobs;

    const newJob = {
      id: Date.now(),
      ...formData,
      openings: Number(formData.openings),
      applicants: 0,
      status: "Active",
      postedDate: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };

    localStorage.setItem("hrJobs", JSON.stringify([...jobs, newJob]));

    setMessage("Job posted successfully.");

    setTimeout(() => {
      navigate("/hr/manage-jobs");
    }, 1000);
  };

  return (
    <>
      <HrNavbar />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="mb-4">
                  <h1 className="fw-bold">Post a New Job</h1>
                  <p className="text-secondary mb-0">
                    Enter the job information and publish the opening.
                  </p>
                </div>

                {message && (
                  <div className="alert alert-success">{message}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="form-label">Job Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Example: React Developer"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Department</label>
                      <input
                        type="text"
                        className="form-control"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Example: Engineering"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Example: Hyderabad"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Job Type</label>
                      <select
                        className="form-select"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                      >
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Contract</option>
                        <option>Remote</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Salary</label>
                      <input
                        type="text"
                        className="form-control"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="Example: ₹6-10 LPA"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Number of Openings</label>
                      <input
                        type="number"
                        className="form-control"
                        name="openings"
                        value={formData.openings}
                        onChange={handleChange}
                        min="1"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Required Skills</label>
                      <input
                        type="text"
                        className="form-control"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="React, JavaScript, Bootstrap, REST API"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Job Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Describe responsibilities and requirements..."
                        required
                      />
                    </div>

                    <div className="col-12 d-flex gap-3">
                      <button className="btn btn-primary" type="submit">
                        <i className="bi bi-send-fill me-2"></i>
                        Publish Job
                      </button>

                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => navigate("/hr/dashboard")}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PostJob;