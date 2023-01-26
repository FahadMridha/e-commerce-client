import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo/repliq2x-logo.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { BiCartAlt } from "react-icons/bi";
import useAdmin from "../../Hooks/UseAdmin/UseAdmin";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const navigate = useNavigate();
  const handlarSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-2">
        <Navbar
          className="bg-transparent !px-0 !py-5"
          fluid={true}
          rounded={true}
        >
          <Link to="/">
            <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
              <span>
                <img className="h-5 w-5" src={logo} alt="" />
              </span>
              A-Z.Com
            </span>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="flex flex-col bg-lime-100 md:bg-inherit mt-5 md:mt-0 pb-5 md:pb-0 justify-center text-center !items-center">
            <Link className="hover:text-blue-500" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-500 mt-4 md:mt-0" to="/products">
              Products
            </Link>
            {user?.email && isAdmin && (
              <Link
                className="hover:text-blue-500 mt-4 md:mt-0"
                to="/dashboard"
              >
                Dashboard
              </Link>
            )}

            <Link className="hover:text-blue-500 mt-4 md:mt-0" to="/">
              About
            </Link>
            <Link className="hover:text-blue-500  mt-4 md:mt-0" to="/mycart">
              <>
                <BiCartAlt className="w-5 h-6" />
              </>
            </Link>
            {user && (
              <button
                onClick={handlarSignOut}
                className="hover:text-blue-500 mt-4 md:mt-0"
              >
                LogOut
              </button>
            )}
            {!user && (
              <Link className="hover:text-blue-500 mt-4 md:mt-0" to="/login">
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
