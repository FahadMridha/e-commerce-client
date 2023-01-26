import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import MainLoyout from "../Layouts/MainLayout/MainLoyout";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/HomePage/Home/Home";
import MyCart from "../Pages/myCart/MyCart";
import CheckOut from "../Pages/Products/Components/CheckOut";
import ViewDetails from "../Pages/Products/Components/ViewDetails";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLoyout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/details",
        element: <ViewDetails />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      // {
      //   path: "/dashboard/employees",
      //   element: <Employees></Employees>,
      // },
      // {
      //   path: "/dashboard/payroll",
      //   element: <Payroll></Payroll>,
      // },
      // {
      //   path: "/dashboard/admins",
      //   element: <Admins></Admins>,
      // },
      // {
      //   path: "/dashboard/candidates",
      //   element: <Candidates></Candidates>,
      // },
      // {
      //   path: "/dashboard/departments",
      //   element: <Departments></Departments>,
      // },
      // {
      //   path: "/dashboard/accounts",
      //   element: <Accounts></Accounts>,
      // },
      // {
      //   path: "/dashboard/holidays",
      //   element: <Holidays></Holidays>,
      // },
      // {
      //   path: "/dashboard/events",
      //   element: <Events></Events>,
      // },
    ],
  },
]);
export default router;
