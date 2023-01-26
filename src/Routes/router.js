import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import MainLoyout from "../Layouts/MainLayout/MainLoyout";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp";
import AddCustomer from "../Pages/Dashboard/Customers/AddCustomers";
import AllCustomers from "../Pages/Dashboard/Customers/AllCustomers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/HomePage/Home/Home";
import MyCart from "../Pages/myCart/MyCart";
import CheckOut from "../Pages/Products/Components/CheckOut";
import ViewDetails from "../Pages/Products/Components/ViewDetails";
import Products from "../Pages/Products/Products";
import AdminRoutes from "./AdminRoute";
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
          fetch(
            `https://e-commerce-server-three.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
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
        element: (
          <AdminRoutes>
            <Dashboard></Dashboard>
          </AdminRoutes>
        ),
      },

      {
        path: "/dashboard/addcustomer",
        element: <AddCustomer />,
      },
      {
        path: "/dashboard/customers",
        element: <AllCustomers />,
      },
    ],
  },
]);
export default router;
