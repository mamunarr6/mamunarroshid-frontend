import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/services",
            element: <Services/>,
        }
    ]
  },
]);

export default router;