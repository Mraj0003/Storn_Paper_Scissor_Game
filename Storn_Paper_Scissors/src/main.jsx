import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePg";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </div>
);
