import { useRoutes } from "react-router-dom";
import UserLayout from "../layout/UserLayout/UserLayout";
import Home from "../pages/User/Home";
import Products from "../pages/User/Products";
import ProductList from "../pages/Admin/ProductList";
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import ActionProduct from "../pages/Admin/ActionProduct";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import NotFound from "../pages/NotFound";

const Layout = () => {
  const router = [
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout>{""}</AdminLayout>,
      children: [
        {
          path: "",
          element: <ProductList />,
        },
        {
          path: "add_product",
          element: <ActionProduct />,
        },
        {
          path: "update_product/:id",
          element: <ActionProduct />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return useRoutes(router);
};

export default Layout;
