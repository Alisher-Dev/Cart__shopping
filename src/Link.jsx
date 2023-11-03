import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Shop from "./shop/shop";
import Like from "./Like/Like";
import TodoCart from "./Cart/Todo";
import Product from "./Cart/Product";
import Decor from "./Cart/decor";
import PageNot from "./Cart/Error/404";

export default function Link() {
    return (
      <Routes>
        <Route path={"/"} element={<Cart />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/Decor/:id"} element={<Decor />} />
        <Route path={"/products/:id"} element={<Product />} />
        <Route path={"/Cart"} element={<TodoCart />} />
        <Route path={"/Like"} element={<Like />} />
        <Route path="*" element={<PageNot />} />
      </Routes>
    );
}
