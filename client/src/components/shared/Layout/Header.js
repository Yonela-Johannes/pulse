import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Logo from "../Logo";
const Header = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast("Logout Successfully");
    navigate("/login");
  };

  console.log(currentUser)
  return (
    <>
      <nav className="border-b border-b-clr py-4 px-6">
        <div className="">
        {/* <Logo /> */}
          <ul className="flex items-center gap-4">
            <li className="">
              <p className="flex items-center justify-center text-lg">
                {currentUser?.name || currentUser?.hospital || currentUser?.organisation}
                &nbsp;
                <span className="badge bg-secondary text-[12px]">{currentUser?.role}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="">
                <Link to="/analytics">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="">
                <Link to="/">
                  Home
                </Link>
              </li>
            )}
            <li className="">
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
