import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="career-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link
              className="text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
              to="/"
            >
              <span className="brand-icon">
                <i className="bi bi-briefcase-fill"></i>
              </span>

              <span className="fw-bold fs-4 text-white">
                CareerConnect
              </span>
            </Link>

            <p className="footer-description">
              A modern recruitment platform connecting talented applicants
              with growing companies and professional recruiters.
            </p>

            <div className="d-flex gap-2 mt-3">
              <button
                className="social-button"
                type="button"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </button>

              <button
                className="social-button"
                type="button"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </button>

              <button
                className="social-button"
                type="button"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </button>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">Platform</h6>

            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/jobs">Browse Jobs</Link>
              </li>

              <li>
                <Link to="/register">Create Profile</Link>
              </li>

              <li>
                <Link to="/login">Recruiter Login</Link>
              </li>

              <li>
                <Link to="/login">Admin Login</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">Resources</h6>

            <ul className="list-unstyled footer-links">
              <li>
                <a href="/#how-it-works">How It Works</a>
              </li>

              <li>
                <a href="/#about">About Us</a>
              </li>

              <li>
                <a href="/#features">Features</a>
              </li>

              <li>
                <a href="mailto:support@careerconnect.demo">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="footer-heading">Stay Updated</h6>

            <p className="footer-description">
              Receive career tips and new job updates.
            </p>

            <form
              className="d-flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Subscribed successfully!");
                event.currentTarget.reset();
              }}
            >
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                required
              />

              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <p className="mb-0 footer-copyright">
            © {currentYear} Career Connect. All rights reserved.
          </p>

          <p className="mb-0 footer-copyright">
            Frontend demonstration project
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;