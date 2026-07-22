import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDashboardPath, getUser, setUser } from "../../services/auth";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "applicant",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const user = getUser();
    if (user?.isAuthenticated) {
      navigate(getDashboardPath(user.role), { replace: true });
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please complete all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const user = {
      fullName: formData.fullName,
      email: formData.email,
      role: formData.role,
      isAuthenticated: true,
    };

    setUser(user);
    navigate(getDashboardPath(formData.role));
  };

  return (
    <div className="register-page min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="register-card row g-0 shadow-lg rounded-4 overflow-hidden">
        <div className="col-lg-6 register-panel bg-secondary text-white d-none d-lg-flex flex-column justify-content-between p-5">
          <div>
            <div className="mb-4">
              <h3 className="fw-bold">Join Career Connect</h3>
              <p className="text-white-75 mb-0">
                Create your account to discover jobs, manage applications, and connect with top recruiters.
              </p>
            </div>

            <div className="feature-block">
              <p className="mb-3">
                <i className="bi bi-award-fill me-2"></i>
                Trusted for better hiring and career planning.
              </p>
              <p className="mb-3">
                <i className="bi bi-people-fill me-2"></i>
                Role-based onboarding for applicants, HR, and admins.
              </p>
              <p>
                <i className="bi bi-phone-fill me-2"></i>
                Responsive experience on desktop and mobile.
              </p>
            </div>
          </div>

          <div className="text-white-50 small">
            Already have an account? <Link to="/login" className="text-white text-decoration-underline">Sign in</Link>
          </div>
        </div>

        <div className="col-12 col-lg-6 p-4 p-lg-5 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="fw-bold mb-1">Create Account</h3>
              <p className="text-muted mb-0">Register and get started in seconds.</p>
            </div>
            <span className="badge bg-primary text-white">Free</span>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3 form-floating">
              <input
                type="text"
                className="form-control rounded-4"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <label htmlFor="fullName">Full Name</label>
            </div>

            <div className="mb-3 form-floating">
              <input
                type="email"
                className="form-control rounded-4"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="mb-3 row g-3">
              <div className="col-sm-6 form-floating">
                <input
                  type="password"
                  className="form-control rounded-4"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-sm-6 form-floating">
                <input
                  type="password"
                  className="form-control rounded-4"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Register as</label>
              <select
                className="form-select rounded-4"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="applicant">Applicant</option>
                <option value="hr">HR / Recruiter</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button className="btn btn-primary btn-brand w-100 mb-3 rounded-4" type="submit">
              Create my account
            </button>
          </form>

          <div className="text-center">
            <p className="mb-0 text-muted">
              By creating an account, you agree to our <Link to="/" className="text-decoration-none">Terms</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
