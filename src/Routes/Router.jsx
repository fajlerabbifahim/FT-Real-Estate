import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllPropertyPage/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashBoardLayout from "../Layouts/DashBoard/DashBoardLayout";
import MyProfile from "../Pages/Dashboard/MyProfile/Myprofile";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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

  // dashboard section

  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [{ path: "myProfile", element: <MyProfile /> }],
  },
]);

export default Router;
