import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li className=""><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}> Home </NavLink></li>
        <li className="mx-1"><NavLink to='/instructor' className={({ isActive }) => (isActive ? 'active' : 'default')}> Instructor </NavLink></li>
        <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'active' : 'default')}> Classes </NavLink></li>

    </>
    return (
        <div className="navbar  text-white bg-black max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 list-none">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-gray-600 rounded-box w-20">
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;