import { createBrowserRouter } from "react-router-dom";
import MainLoyout from "../Layouts/MainLayout/MainLoyout";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/HomePage/Home/Home";
import MyCart from "../Pages/myCart/MyCart";
import Products from "../Pages/Products/Products";

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
