import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllPropertyPage/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/allProperties",
    element: <AllProperties />,
  },
  {
    path: "/propertyDetails/:id",
    element: <PropertyDetails />,
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
