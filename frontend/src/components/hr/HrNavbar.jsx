import { Link, NavLink, useNavigate } from "react-router-dom";

function HrNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("careerConnectUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" to="/hr/dashboard">
          CareerConnect HR
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hrNavbar"
          aria-controls="hrNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="hrNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/hr/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hr/post-job">
                Post Job
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hr/manage-jobs">
                Manage Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hr/applicants">
                Applicants
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hr/interviews">
                Interviews
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hr/profile">
                Company Profile
              </NavLink>
            </li>
          </ul>

          <button
            className="btn btn-outline-light"
            type="button"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HrNavbar;