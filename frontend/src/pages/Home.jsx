import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Career Connect
          </Link>

          <div className="d-flex gap-2">
            <Link className="btn btn-light" to="/login">
              Login
            </Link>

            <Link className="btn btn-warning" to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-light py-5">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold">
            Find Your Dream Career
          </h1>

          <p className="lead text-secondary mt-3">
            Connect applicants, recruiters and organizations through one
            simple recruitment platform.
          </p>

          <div className="mt-4">
            <Link className="btn btn-primary btn-lg me-3" to="/jobs">
              Explore Jobs
            </Link>

            <Link className="btn btn-outline-primary btn-lg" to="/register">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <i className="bi bi-search fs-1 text-primary"></i>
              <h3 className="mt-3">Search Jobs</h3>
              <p className="text-secondary">
                Search jobs based on skills, company and location.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <i className="bi bi-file-earmark-person fs-1 text-primary"></i>
              <h3 className="mt-3">Apply Easily</h3>
              <p className="text-secondary">
                Create your profile and apply to suitable opportunities.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <i className="bi bi-graph-up-arrow fs-1 text-primary"></i>
              <h3 className="mt-3">Track Progress</h3>
              <p className="text-secondary">
                Track applications, interviews and selection status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;