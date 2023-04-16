import "./App.css";
import ProductList from "./Components/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import Fetch from "./Components/Fetch";

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/addProduct", element: <AddProduct /> },
  { path: "/fetch", element: <Fetch /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
