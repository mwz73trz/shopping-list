import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UpdateCategoryPage from "./pages/UpdateCategoryPage";
import DeleteCategoryPage from "./pages/DeleteCategoryPage";
import ItemsPage from "./pages/ItemsPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import AddItemPage from "./pages/AddItemPage";
import ItemPage from "./pages/ItemPage";
import UpdateItemPage from "./pages/UpdateItemPage";
import DeleteItemPage from "./pages/DeleteItemPage";
import CheckLoginPage from "./pages/CheckLoginPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignpuPage";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar username={username} setUsername={setUsername} />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUsername={setUsername} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <HomePage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateCategoryPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <ItemsPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <AddCategoryPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteCategoryPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id/items/add"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <AddItemPage username={username} />}
              />
            }
          />
          <Route
            path="/categories/:id/items/:id"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <ItemPage username={username} />}
              />
            }
          />
          <Route
            path="/items/:id/update"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <UpdateItemPage username={username} />}
              />
            }
          />
          <Route
            path="items/:id/delete"
            element={
              <CheckLoginPage
                username={username}
                actualPage={() => <DeleteItemPage username={username} />}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
