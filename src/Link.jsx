import { Route, Routes } from "react-router-dom";

import PageNot from "./Error/404";
import Main from "./Main/Main";

export default function Link() {
    return (
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path="*" element={<PageNot />} />
      </Routes>
    );
}
