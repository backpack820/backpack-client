import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../pages/About/About";
import Blogs from "../../pages/Blogs/Blogs/Blogs";
import Contact from "../../pages/Contact/Contact";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import BlogsDetails from "../../pages/BlogsDetails/BlogsDetails";
import Reviews from "../../pages/Reviews/Reviews";
import DestinationPage from "../../pages/Home/Destination/DestinationPage";
import Tickets from "../../pages/Events/Tickets/Tickets";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import MyProfile from "../../pages/MyProfile/MyProfile";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://backpack-server.vercel.app/destination");
        },
        element: <Home />,
      },
      {
        path: "/destinations/:id",
        loader: async ({ params }) => {
          return fetch(`https://backpack-server.vercel.app/destination/${params.id}`);
        },
        element: (
          <PrivateRoutes>
            <DestinationPage />
          </PrivateRoutes>
        ),
      },

      {
        path: "/tickets",
        loader: async () => {
          return fetch("https://backpack-server.vercel.app/destination");
        },
        element: (
          <PrivateRoutes>
            <Tickets />
          </PrivateRoutes>
        ),
      },
      {
        path: "/reviews",
        loader: async () => {
          return fetch("https://backpack-server.vercel.app/reviews");
        },
        element: <Reviews />,
      },
      {
        path: "/blogs",
        loader: async () => {
          return fetch("https://backpack-server.vercel.app/blogs");
        },
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        loader: async ({ params }) => {
          return fetch(`https://backpack-server.vercel.app/blogs/${params.id}`);
        },
        element: <BlogsDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default Routes;
