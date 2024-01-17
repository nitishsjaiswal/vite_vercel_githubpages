import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
  const pageRoutes = pagesData.map(
    (ele: { path: string; element: JSX.Element }) => {
      return <Route key={ele.path} path={ele.path} element={ele.element} />;
    }
  );

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
