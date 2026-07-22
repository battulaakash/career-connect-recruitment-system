import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import heroImage from "../assets/hero.png";

const categories = [
  {
    icon: "bi-code-slash",
    title: "Software Development",
    jobs: 245,
  },
  {
    icon: "bi-bar-chart-line",
    title: "Data & Analytics",
    jobs: 180,
  },
  {
    icon: "bi-palette",
    title: "Design & Creative",
    jobs: 96,
  },
  {
    icon: "bi-megaphone",
    title: "Marketing",
    jobs: 130,
  },
  {
    icon: "bi-currency-rupee",
    title: "Finance",
    jobs: 88,
  },
  {
    icon: "bi-heart-pulse",
    title: "Healthcare",
    jobs: 110,
  },
];

const featuredJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSphere",
    location: "Bengaluru",
    type: "Full Time",
    salary: "₹6–10 LPA",
    icon: "TS",
  },
  {
    id: 2,
    title: "Java Backend Developer",
    company: "CodeCraft Labs",
    location: "Pune",
    type: "Full Time",
    salary: "₹7–12 LPA",
    icon: "CC",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Pixel Studio",
    location: "Hyderabad",
    type: "Hybrid",
    salary: "₹5–8 LPA",
    icon: "PS",
  },
];

function Home() {
  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const keyword = formData.get("keyword");
    const location = formData.get("location");

    alert(
      `Searching for "${keyword || "all jobs"}" in ${
        location || "all locations"
      }`
    );
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center min-vh-75 py-5">
              <div className="col-lg-6">
                <span className="hero-badge">
                  <i className="bi bi-stars me-2"></i>
                  Build your future with the right opportunity
                </span>

                <h1 className="hero-title mt-4">
                  Find the job that matches your
                  <span className="text-primary"> ambition.</span>
                </h1>

                <p className="hero-description mt-4">
                  Discover relevant opportunities, connect with recruiters and
                  manage your complete application journey from one platform.
                </p>

                <form
                  className="hero-search-card mt-4"
                  onSubmit={handleSearch}
                >
                  <div className="row g-3">
                    <div className="col-md-5">
                      <label className="form-label visually-hidden">
                        Job keyword
                      </label>

                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-search"></i>
                        </span>

                        <input
                          className="form-control border-start-0"
                          type="text"
                          name="keyword"
                          placeholder="Job title or skill"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label visually-hidden">
                        Location
                      </label>

                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-geo-alt"></i>
                        </span>

                        <input
                          className="form-control border-start-0"
                          type="text"
                          name="location"
                          placeholder="Location"
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <button
                        className="btn btn-primary w-100 h-100"
                        type="submit"
                      >
                        Search Jobs
                      </button>
                    </div>
                  </div>
                </form>

                <div className="d-flex flex-wrap gap-4 mt-4 hero-stats">
                  <div>
                    <strong>1,200+</strong>
                    <span>Active Jobs</span>
                  </div>

                  <div>
                    <strong>450+</strong>
                    <span>Companies</span>
                  </div>

                  <div>
                    <strong>8,000+</strong>
                    <span>Applicants</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="hero-image-wrapper">
                  <img
                    className="img-fluid hero-image"
                    src={heroImage}
                    alt="Professionals finding career opportunities"
                  />

                  <div className="floating-card floating-card-top">
                    <span className="floating-icon success">
                      <i className="bi bi-check-circle-fill"></i>
                    </span>

                    <div>
                      <strong>Application sent</strong>
                      <small>Frontend Developer</small>
                    </div>
                  </div>

                  <div className="floating-card floating-card-bottom">
                    <span className="floating-icon warning">
                      <i className="bi bi-calendar-event"></i>
                    </span>

                    <div>
                      <strong>Interview scheduled</strong>
                      <small>Tomorrow at 11:00 AM</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" id="features">
          <div className="container">
            <div className="section-header text-center mx-auto">
              <span className="section-label">Popular categories</span>
              <h2>Explore opportunities by category</h2>
              <p>
                Browse career opportunities based on your skills and preferred
                industry.
              </p>
            </div>

            <div className="row g-4 mt-3">
              {categories.map((category) => (
                <div className="col-sm-6 col-lg-4" key={category.title}>
                  <Link
                    className="category-card"
                    to="/jobs"
                  >
                    <span className="category-icon">
                      <i className={`bi ${category.icon}`}></i>
                    </span>

                    <div>
                      <h5>{category.title}</h5>
                      <p>{category.jobs} open positions</p>
                    </div>

                    <i className="bi bi-arrow-right category-arrow"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing jobs-section">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
              <div className="section-header">
                <span className="section-label">Featured jobs</span>
                <h2>Opportunities selected for you</h2>
                <p>
                  Explore recently posted roles from verified companies.
                </p>
              </div>

              <Link className="btn btn-outline-primary" to="/jobs">
                View All Jobs
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="row g-4 mt-2">
              {featuredJobs.map((job) => (
                <div className="col-lg-4" key={job.id}>
                  <article className="job-card h-100">
                    <div className="d-flex justify-content-between">
                      <span className="company-logo">{job.icon}</span>

                      <button
                        className="save-job-button"
                        type="button"
                        onClick={(event) => {
                          event.currentTarget.classList.toggle("saved");
                        }}
                        aria-label={`Save ${job.title}`}
                      >
                        <i className="bi bi-bookmark"></i>
                      </button>
                    </div>

                    <div className="mt-4">
                      <h4>{job.title}</h4>
                      <p className="company-name">{job.company}</p>
                    </div>

                    <div className="job-meta">
                      <span>
                        <i className="bi bi-geo-alt"></i>
                        {job.location}
                      </span>

                      <span>
                        <i className="bi bi-briefcase"></i>
                        {job.type}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <strong className="job-salary">{job.salary}</strong>

                      <Link className="btn btn-primary btn-sm" to="/jobs">
                        View Job
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-white" id="how-it-works">
          <div className="container">
            <div className="section-header text-center mx-auto">
              <span className="section-label">Simple process</span>
              <h2>Start your career journey in three steps</h2>
            </div>

            <div className="row g-4 mt-4">
              <div className="col-md-4">
                <div className="process-card">
                  <span className="process-number">01</span>
                  <i className="bi bi-person-plus process-icon"></i>
                  <h4>Create your profile</h4>
                  <p>
                    Register and add your skills, experience and career
                    preferences.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="process-card">
                  <span className="process-number">02</span>
                  <i className="bi bi-search process-icon"></i>
                  <h4>Discover matching jobs</h4>
                  <p>
                    Search and filter opportunities that match your profile.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="process-card">
                  <span className="process-number">03</span>
                  <i className="bi bi-send-check process-icon"></i>
                  <h4>Apply and track</h4>
                  <p>
                    Submit applications and track their progress from your
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing" id="about">
          <div className="container">
            <div className="cta-card text-center">
              <span className="section-label text-white">
                Your next opportunity starts here
              </span>

              <h2 className="text-white mt-3">
                Ready to build your professional future?
              </h2>

              <p>
                Create your Career Connect profile and begin exploring new
                opportunities.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                <Link className="btn btn-light btn-lg" to="/register">
                  Create Free Account
                </Link>

                <Link className="btn btn-outline-light btn-lg" to="/jobs">
                  Browse Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;