import { NavLink, Outlet} from "react-router-dom";
import useUserData from "../hooks/useUserData";
import { FaHome, FaPlusCircle, FaSchool, FaUsers } from "react-icons/fa";

const Dashboard = () => {
    const [userFromDB] = useUserData();
    const role = userFromDB?.role;
    console.log(role);
    if (!role) {
        return <></>
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn my-btn drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        role === 'admin' ? <>
                            <h2 className="text-2xl text-orange-600 mb-2">Admin Dashboard</h2>
                            <li><NavLink to="/dashboard/adminClasses"><FaSchool></FaSchool> Manage classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageStudents"><FaUsers></FaUsers> Manage students</NavLink></li>

                        </> :
                            role === 'instructor' ?
                                <>
                                    <h2 className="text-2xl text-orange-600 mb-2">Instructor Dashboard</h2>
                                    <li><NavLink to="/dashboard/addAClass"><FaPlusCircle></FaPlusCircle>Add a Class</NavLink></li>
                                    <li><NavLink to="/dashboard/myClasses"><FaSchool></FaSchool> My classes</NavLink></li>
                                </> :
                                <>
                                    <h2 className="text-2xl text-orange-600 mb-2">Student Dashboard</h2>
                                    <li><NavLink to="/dashboard/paymentHistory"><FaSchool></FaSchool> Payment History</NavLink></li>
                                    <li><NavLink to="/dashboard/selectedClass"><FaPlusCircle></FaPlusCircle>My selected Class</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolledClass"><FaPlusCircle></FaPlusCircle>My enrolled Class</NavLink></li>
                                </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/instructor"><FaUsers></FaUsers> Instructor</NavLink></li>
                    <li><NavLink to="/classes"><FaSchool></FaSchool> Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;