import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import RootLayout from "./layouts/RootLayout";
import SolutionsLayout from "./layouts/SolutionsLayout";

import "./styles/App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="solutions" element={<SolutionsLayout />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
