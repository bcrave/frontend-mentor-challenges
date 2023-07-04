import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import QrCode from "./pages/QrCode";
import ResultsSummary from "./pages/ResultsSummary";
import ProductPreview from "./pages/ProductPreview";
import InteractiveRating from "./pages/InteractiveRating";
import NftPreview from "./pages/NftPreview";

import RootLayout from "./layouts/RootLayout";

import "./styles/App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="qr-code" element={<QrCode />} />
      <Route path="results-summary" element={<ResultsSummary />} />
      <Route path="product-preview" element={<ProductPreview />} />
      <Route path="interactive-rating" element={<InteractiveRating />} />
      <Route path="nft-preview" element={<NftPreview />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
