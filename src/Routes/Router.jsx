import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
