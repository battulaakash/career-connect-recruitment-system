import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "applicant",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    const user = {
      email: formData.email,
      role: formData.role,
      isAuthenticated: true,
    };

    localStorage.setItem("careerConnectUser", JSON.stringify(user));

    if (formData.role === "admin") {
      navigate("/admin/dashboard");
    } else if (formData.role === "hr") {
      navigate("/hr/dashboard");
    } else {
      navigate("/applicant/dashboard");
    }
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow p-4">
              <div className="card-body">
                <h2 className="text-center fw-bold">Welcome Back</h2>
                <p className="text-center text-secondary">
                  Sign in to Career Connect
                </p>

                {error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Login As</label>

                    <select
                      className="form-select"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="applicant">Applicant</option>
                      <option value="hr">HR / Recruiter</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  </div>

                  <button className="btn btn-primary w-100" type="submit">
                    Sign In
                  </button>
                </form>

                <p className="text-center mt-3 mb-0">
                  New applicant?{" "}
                  <Link to="/register">Create account</Link>
                </p>

                <p className="text-center mt-2">
                  <Link to="/">Return home</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;