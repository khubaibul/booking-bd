import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Billing from "../../Pages/Billing/Billing";
import Home from "../../Pages/Home/Home";
import TravelPlace from "../../Pages/Home/TravelPlace/TravelPlace";
import HotelsDetails from "../../Pages/HotelDetails/HotelsDetails";
import Login from "../../Pages/User/Login/Login";
import SignUp from "../../Pages/User/SignUp/SignUp";
import UserProfile from "../../Pages/User/UserProfile/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://booking-bd-app-server.vercel.app/allplace")
            },
            {
                path: "/hotels/:id",
                element: <PrivateRoute><TravelPlace></TravelPlace></PrivateRoute>,
                loader: ({ params }) => fetch(`https://booking-bd-app-server.vercel.app/hotels/${params.id}`)
            },
            {
                path: "/hotel/:id",
                element: <PrivateRoute><HotelsDetails></HotelsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://booking-bd-app-server.vercel.app/hotel/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/billing/:id/:name",
                element: <Billing></Billing>,
                loader: () => fetch("https://booking-bd-app-server.vercel.app/hotels")
            }
        ]
    }
])