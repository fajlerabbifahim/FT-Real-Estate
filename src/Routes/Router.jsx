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
import AddProperty from "../Pages/Dashboard/Agent/AddProperty/AddProperty";
import MyAddedProperty from "../Pages/Dashboard/Agent/MyAddedProperty/MyAddedProperty";
import ManageProperty from "../Pages/Dashboard/Admin/ManageProperty/ManageProperty";
import ManageReview from "../Pages/Dashboard/Admin/ManageReview/ManageReview";
import RequestedProperty from "../Pages/Dashboard/Agent/RequestedProperty/RequestedProperty";
import MySoldProperty from "../Pages/Dashboard/Agent/mySoldProperty/mySoldProperty";
import AdminHome from "../Pages/Dashboard/Admin/Home/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AgentHome from "../Pages/Dashboard/Agent/AgentHome/AgentHome";

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
      { path: "home", element: <UserHome /> },
      { path: "myProfile", element: <MyProfile /> },
      { path: "wishlist/:email", element: <WishList /> },
      { path: "makeOffer/:id", element: <MakeOffer /> },
      { path: "propertyBought/:email", element: <PropertyBought /> },
      { path: "reviews/:email", element: <MyReviews /> },

      //agent route
      { path: "home", element: <AgentHome /> },
      { path: "agentProfile", element: <AgentProfile /> },
      { path: "addProperty", element: <AddProperty /> },
      { path: "myAddedProperty/:email", element: <MyAddedProperty /> },
      { path: "requestedProperty", element: <RequestedProperty /> },
      { path: "mySoldProperty", element: <MySoldProperty /> },
      //admin route
      { path: "home", element: <AdminHome /> },
      { path: "adminProfile", element: <AdminProfile /> },
      { path: "users", element: <ManageUser /> },
      { path: "allProperties", element: <ManageProperty /> },
      { path: "manageReview", element: <ManageReview /> },
    ],
  },
]);

export default Router;
