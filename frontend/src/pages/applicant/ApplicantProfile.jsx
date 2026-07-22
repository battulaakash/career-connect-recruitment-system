import { useState } from "react";
import ApplicantNavbar from "../../components/applicant/ApplicantNavbar";

function ApplicantProfile() {
  const existingProfile =
    JSON.parse(localStorage.getItem("applicantProfile")) || {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      qualification: "",
      skills: "",
      experience: "",
    };

  const [profile, setProfile] = useState(existingProfile);

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "applicantProfile",
      JSON.stringify(profile)
    );

    alert("Profile updated successfully.");
  };

  return (
    <>
      <ApplicantNavbar />

      <div className="container py-5">
        <h1 className="fw-bold">My Profile</h1>
        <p className="text-secondary">
          Update your personal and professional details.
        </p>

        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body p-4 p-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-control"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input
                    className="form-control"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Qualification</label>
                  <input
                    className="form-control"
                    name="qualification"
                    value={profile.qualification}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Experience</label>
                  <input
                    className="form-control"
                    name="experience"
                    value={profile.experience}
                    onChange={handleChange}
                    placeholder="Example: Fresher"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Skills</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="skills"
                    value={profile.skills}
                    onChange={handleChange}
                    placeholder="React, Java, Spring Boot, MySQL"
                  ></textarea>
                </div>
              </div>

              <button className="btn btn-primary mt-4" type="submit">
                Save Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantProfile;