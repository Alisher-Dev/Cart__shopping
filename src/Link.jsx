import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Shop from "./shop/shop";
import Like from "./Like/Like";
import TodoCart from "./Cart/Todo";
import Products from "./Cart/Products";

export default function Link() {
    return (
      <Routes>
        <Route path={"/"} element={<Cart />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/Cart"} element={<TodoCart />} />
        <Route path={"/Products"} element={<Products />} />
        <Route path={"/Like"} element={<Like />} />
      </Routes>
    );
}
