import "./App.css";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOut from "./pages/CheckOut";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <CheckOut />,
    },
  ]);
  return (
    <CartProvider>
      <>
        <RouterProvider router={router} />
      </>
    </CartProvider>
  );
}

export default App;
