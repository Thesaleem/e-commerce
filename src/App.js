import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import LandingPage from "./components/LandingPage";
import ProductDetails from "./components/ProductDetails";
import MensClothing, { loader as mensLoader } from "./pages/MensClothimg";
import Electronics, { loader as electronicsLoader } from "./pages/Electronics";
import Jewelery, { loader as jeweleryLoader } from "./pages/Jewelery";
import WomensClothing, { loader as womensLoader } from "./pages/WomensClothing";
import CheckoutForm, {action as formAction} from "./components/Cart Layout/CheckoutForm";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./components/Cart Layout/Cart";
import "./App.css";
import AllProducts from "./components/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "products",
        children: [
          { index: true, element: <AllProducts /> },
          {
            path: ":productid",
            element: <ProductDetails />,
          },
          {
            path: `men's clothing`,
            element: <MensClothing />,
            loader: mensLoader,
          },
          {
            path: `electronics`,
            element: <Electronics />,
            loader: electronicsLoader,
          },
          {
            path: `jewelery`,
            element: <Jewelery />,
            loader: jeweleryLoader,
          },
          {
            path: `women's clothing`,
            element: <WomensClothing />,
            loader: womensLoader,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckoutForm />,
        action: formAction
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-roboto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
