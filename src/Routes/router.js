import { createBrowserRouter } from "react-router-dom";
import MainLoyout from "../Layouts/MainLayout/MainLoyout";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/HomePage/Home/Home";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
