import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("careerConnectUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("careerConnectUser");
    navigate("/login");
  };

  const getDashboardPath = () => {
    if (user?.role === "admin") return "/admin/dashboard";
    if (user?.role === "hr") return "/hr/dashboard";
    return "/applicant/dashboard";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="brand-icon">
            <i className="bi bi-briefcase-fill"></i>
          </span>

          <span className="fw-bold fs-4 text-dark">
            Career<span className="text-primary">Connect</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#careerNavbar"
          aria-controls="careerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="careerNavbar"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`
                }
                to="/jobs"
              >
                Browse Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="/#how-it-works">
                How It Works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="/#about">
                About
              </a>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2">
            {user?.isAuthenticated ? (
              <>
                <Link
                  className="btn btn-outline-primary"
                  to={getDashboardPath()}
                >
                  <i className="bi bi-grid me-2"></i>
                  Dashboard
                </Link>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-primary" to="/login">
                  Sign In
                </Link>

                <Link className="btn btn-primary" to="/register">
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;