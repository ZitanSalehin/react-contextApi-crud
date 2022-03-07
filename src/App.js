import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <div className="App">
      <UserProvider>

      <BrowserRouter>
      <Routes>
      <Route>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </UserProvider>
    </div>
  );
}

export default App;
