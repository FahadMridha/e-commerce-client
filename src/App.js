import { RouterProvider } from "react-router-dom";
import "./styles/App.css";

import { Toaster } from "react-hot-toast";
import router from "./Routes/router";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}
export default App;
