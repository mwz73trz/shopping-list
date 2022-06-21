import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UpdateCategoryPage from "./pages/UpdateCategoryPage";
import DeleteCategoryPage from "./pages/DeleteCategoryPage";
import ItemsPage from "./pages/ItemsPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import AddItemPage from "./pages/AddItemPage";
import ItemPage from "./pages/ItemPage";
import UpdateItemPage from "./pages/UpdateItemPage";
import DeleteItemPage from "./pages/DeleteItemPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categories/:id/update"
            element={<UpdateCategoryPage />}
          />
          <Route path="/categories/:id" element={<ItemsPage />} />
          <Route path="/categories/add" element={<AddCategoryPage />} />
          <Route
            path="/categories/:id/delete"
            element={<DeleteCategoryPage />}
          />
          <Route path="/categories/:id/items/add" element={<AddItemPage />} />
          <Route path="/categories/:id/items/:id" element={<ItemPage />} />
          <Route path="/items/:id/update" element={<UpdateItemPage />} />
          <Route path="items/:id/delete" element={<DeleteItemPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
