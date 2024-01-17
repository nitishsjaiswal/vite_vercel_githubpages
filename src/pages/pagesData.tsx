import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Terms from "./Terms";

interface routerType {
  path: string;
  element: JSX.Element;
}

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "terms",
    element: <Terms />,
  },
];

export default pagesData;
