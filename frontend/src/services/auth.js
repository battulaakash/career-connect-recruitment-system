export function getUser() {
  try {
    return JSON.parse(localStorage.getItem("careerConnectUser"));
  } catch {
    return null;
  }
}

export function setUser(user) {
  localStorage.setItem("careerConnectUser", JSON.stringify(user));
}

export function clearUser() {
  localStorage.removeItem("careerConnectUser");
}

export function isAuthenticated() {
  return !!getUser()?.isAuthenticated;
}

export function getDashboardPath(role) {
  switch (role) {
    case "admin":
      return "/admin/dashboard";
    case "hr":
      return "/hr/dashboard";
    default:
      return "/applicant/dashboard";
  }
}
