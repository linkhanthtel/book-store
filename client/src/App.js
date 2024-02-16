import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/createBook";
import EditBook from "./pages/editbook";
import DeleteBook from "./pages/deleteBook";
import ShowBook from "./pages/showBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
