import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import QrCode from "./pages/QrCode";
import ResultsSummary from "./pages/ResultsSummary";

import RootLayout from "./layouts/RootLayout";

import "./styles/App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="qr-code" element={<QrCode />} />
      <Route path="results-summary" element={<ResultsSummary />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
