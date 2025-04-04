import React from "react";
import userServices from "../services/userServices";
import {
  Link,
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import Sidebar from "../components/Sidebar";

export async function loader() {
  // get currenly logged in user

  try {
    const { data } = await userServices.getUserById();
    console.log("Current user", data);

    if (data) {
      return data;
    }
  } catch (error) {
    console.log("Error in loader", error.message);
    return redirect("/login");
  }
}

function DashboardNav() {
  const { user } = useLoaderData();
  console.log("user", user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    // perform logout logic here
    try {
      let { data } = await userServices.logoutUser();
      console.log("Logout successful", data);
      navigate("/login");
    } catch (error) {
      console.log("Logout Error", error.message);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                  Job Portal
                </Link>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">
                        Welcome {user.name}
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
