import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../pages/Home";
import Register from "../../pages/Authentication/Register";
import Login from "../../pages/Authentication/Login";
import ErrorPage from "../../pages/ErrorPage";
import AddService from "../../pages/AddService";
import PrivetRouter from "./PrivetRouter";
import DetailsServices from "../../pages/DetailsServices";
import ManageService from "../../pages/ManageService";
import UpdateServices from "../../pages/UpdateServices";
import BookedServices from "../../pages/BookedServices";
import ServiceToDo from "../../pages/ServiceToDo";
import AllServices from "../../pages/AllServices";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "add-service",
        element: (
          <PrivetRouter>
            <AddService></AddService>
          </PrivetRouter>
        ),
      },
      {
        path: "DetailService/:id",
        element: (
          <PrivetRouter>
            {" "}
            <DetailsServices></DetailsServices>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "updateService/:id",
        element: (
          <PrivetRouter>
            {" "}
            <UpdateServices></UpdateServices>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "ManageService",
        element: (
          <PrivetRouter>
            {" "}
            <ManageService></ManageService>   {" "}
          </PrivetRouter>
        ),
      },
      {
        path: "BookedServices",
        element: (
          <PrivetRouter>
            {" "}
            <BookedServices></BookedServices>   {" "}
          </PrivetRouter>
        ),
      },
      {
        path: "service-to-do",
        element: (
          <PrivetRouter>
            {" "}
            <ServiceToDo></ServiceToDo>   {" "}
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
