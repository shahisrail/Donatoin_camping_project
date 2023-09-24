import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Donations from "../Pages/Donations/Donations";
import Staticks from "../Pages/Staticks/Staticks";
import Homes from "../Pages/Homes/Homes";
import Error from "../Pages/ErrorPgae/Error";
import Curd from "../Pages/Curd/Curd";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Homes></Homes>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/Donation",
        element: <Donations></Donations>,
      },
      {
        path: "/statistics",
        element: <Staticks></Staticks>,
      },
      {
        path: "/cards/:id",
        element: <Curd></Curd>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
