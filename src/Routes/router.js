import { createBrowserRouter } from "react-router-dom";
import MainLoyout from "../Layouts/MainLayout/MainLoyout";
import Login from "../Pages/Authentication/Login/Login";
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
        path: "/order",
        element: <PrivateRoute>{/* <Order></Order> */}</PrivateRoute>,
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
            `https://e-commerce-task-server.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
