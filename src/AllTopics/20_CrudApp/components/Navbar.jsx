import React from "react";
import { Link, useNavigate } from "react-router-dom";

let token = sessionStorage.getItem("token");

const handleLogout = () => {
    let confirmMsg = confirm("Are you Sure ?");
    if (confirmMsg) {
        // remove token
        sessionStorage.removeItem("token");

        // navigate to login
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNavigate("/login");
    }
}

const Navbar = () => {
  return (
    <header className="p-5 flex justify-between items-center shadow fixed top-0 w-full   bg-blue-800">
      <figure className="text-3x1 font-bold">QManager</figure>
      <nav className="flex items-center gap-10 font-semibold">
        {token ? (
          <>
            <Link to={"/"}>Dashboard</Link>
            <div onClick={handleLogout}>Logout</div>
          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
