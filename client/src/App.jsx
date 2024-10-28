import Homepage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/createproduct" element={<CreateProductPage />} />
          <Route path="/:productId" element={<ViewProductPage />} />
          <Route path="/edit/:productId" element={<EditProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
