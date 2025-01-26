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
import WishList from "../Pages/Dashboard/WishList/WishList";
import MakeOffer from "../Pages/Dashboard/MakeOffer/MakeOffer";
import PropertyBought from "../Pages/Dashboard/PropertyBought/PropertyBought";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile/AgentProfile";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";

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
    children: [
      // user route

      { path: "myProfile", element: <MyProfile /> },
      { path: "wishlist/:email", element: <WishList /> },
      { path: "makeOffer/:id", element: <MakeOffer /> },
      { path: "propertyBought/:email", element: <PropertyBought /> },
      { path: "reviews/:email", element: <MyReviews /> },

      //agent route

      { path: "agentProfile", element: <AgentProfile /> },

      //admin route
      { path: "adminProfile", element: <AdminProfile /> },
      { path: "users", element: <ManageUser /> },
    ],
  },
]);

export default Router;
