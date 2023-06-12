import { Link } from "react-router-dom";
import logo from "../../../assets/logo/LogoMusic.png";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useUserData from "../../../hooks/useUserData";

const Navbar = () => {
  const { user, logOut, theme, setTheme } = useAuth();
  const [userFromDB] = useUserData();
  const role = userFromDB?.role;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li className="mx-1">
        <Link to="/instructor"> Instructor </Link>
      </li>
      <li>
        <Link to="/classes"> Classes </Link>
      </li>

      {role === "admin" && (
        <li>
          <Link to="/dashboard/manageStudents">Dashboard</Link>
        </li>
      )}
      {role === "instructor" && (
        <li>
          <Link to="/dashboard/addAClass">Dashboard</Link>
        </li>
      )}
      {role === "student" && (
        <li>
          <Link to="/dashboard/selectedClass">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`navbar ${theme ? "bg-white" : "bg-black"} text-${
        theme ? "black" : "white"
      } max-w-7xl px-10 py-0`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-600 text-black rounded-box w-52 z-10"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 list-none">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none gap-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                  data-tip={user?.displayName}
                >
                  <div className="w-12 rounded-full text-white">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </label>
                <ul className="mt-3 p-2 z-10 text-black shadow menu menu-sm dropdown-content bg-orange-600 rounded-box w-20">
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="my-btn btn-xs">Login</button>
            </Link>
          )}
        </div>
      </div>
      <label className="swap swap-rotate pl-4">
        <input type="checkbox" checked={theme} onChange={() => setTheme(!theme)} />
        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21,13H20V12a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2ZM3,11H4V9A1,1,0,0,1,6,9v2h1a1,1,0,0,1,0,2H6v2a1,1,0,0,1-2,0V13H3a1,1,0,0,1,0-2ZM19,3a1,1,0,0,0-1,1V6a1,1,0,0,0,2,0V4A1,1,0,0,0,19,3Zm-4,0a1,1,0,0,0-1,1V6a1,1,0,0,0,2,0V4A1,1,0,0,0,15,3ZM9,6V4A1,1,0,0,0,7,4V6a1,1,0,0,0,2,0ZM9,13a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V14A1,1,0,0,0,9,13ZM4,6A1,1,0,0,0,3,7V9A1,1,0,0,0,5,9V7A1,1,0,0,0,4,6Zm12,8a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v1A1,1,0,0,0,16,14Zm-4,0a1,1,0,0,0,1-1V14a1,1,0,0,0-2,0v1A1,1,0,0,0,12,14Zm-4-3V9A1,1,0,0,0,7,9v2a1,1,0,0,0,2,0Z" />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
