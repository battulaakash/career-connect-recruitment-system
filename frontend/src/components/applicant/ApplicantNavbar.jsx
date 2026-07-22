import { Link, NavLink, useNavigate } from "react-router-dom";

function ApplicantNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("careerConnectUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold" to="/applicant/dashboard">
          CareerConnect
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#applicantNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="applicantNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/applicant/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/applicant/jobs">
                Browse Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/applicant/applied-jobs">
                Applied Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/applicant/saved-jobs">
                Saved Jobs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/applicant/profile">
                Profile
              </NavLink>
            </li>
          </ul>

          <button className="btn btn-outline-light" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default ApplicantNavbar;