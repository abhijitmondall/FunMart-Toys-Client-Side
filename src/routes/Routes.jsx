import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home";
import ErrorPage from "../components/Pages/404/ErrorPage";

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
    ],
  },
]);

export default router;
