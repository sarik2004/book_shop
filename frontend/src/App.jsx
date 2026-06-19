import { BrowserRouter, Routes, Route } from "react-router-dom";
///addmin
import Layout from "./components/Layout";
import Book from "./page/Book/Book";
import Category from "./page/Category/Category";
import Dashboard from "./page/Dashboard/Dashboard";
import User from "./page/User/User";
import Order from "./page/Order/Order";
import OrderDetail from "./page/Order/OrderDetail";

import Login from "./page/Login/Login";
import Register from "./page/Login/Register";
// routes
import AdminRoutes from "./routes/AdminRoutes";
import ProtectRoute from "./routes/ProtectRoute";
/// pubic customer

import Home from "../src/components/Frontend/Home";
import Product from "../src/components/Frontend/Product";
import Cart from "./components/Frontend/Cart";
import About from "./components/Frontend/About";
import Contact from "./components/Frontend/Contact";
import Layoutf from "../src/components/Frontend/header/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoutf />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Product />} />
          <Route
            path="/carts"
            element={
              <ProtectRoute>
                <Cart />
              </ProtectRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <AdminRoutes>
              <Layout />
            </AdminRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="book" element={<Book />} />
          <Route path="category" element={<Category />} />
          <Route path="users" element={<User />} />
          <Route path="orders" element={<Order />} />
          <Route path="orders/:id" element={<OrderDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
