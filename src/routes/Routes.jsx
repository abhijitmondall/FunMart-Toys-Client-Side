import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/404/ErrorPage";
import AllToys from "../components/Pages/AllToys/AllToys";
import Blogs from "../components/Pages/Blogs/Blogs";
import MyToys from "../components/Pages/MyToys/MyToys";
import AddToy from "../components/Pages/AddToy/AddToy";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/allToys",
        element: <AllToys />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/myToys",
        element: <MyToys />,
      },

      {
        path: "/addToy",
        element: <AddToy />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
