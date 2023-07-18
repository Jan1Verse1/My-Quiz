import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SectionOne from "./pages/SectionOne";
import TestQuiz from "./pages/TestQuiz";
// import SectionThree from "./pages/SectionThree";
// import SectionFour from "./pages/SectionFour";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/SectionOne", element: <SectionOne /> },
  { path: "/TestQuiz", element: <TestQuiz /> },
  // { path: "/SectionThree", element: <SectionThree /> },
  // { path: "/SectionFour", element: <SectionFour /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
