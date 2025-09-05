import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
