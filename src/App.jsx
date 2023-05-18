import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MoreBlogs from "./Pages/MoreBlogs";
import NotFound from "./Pages/NotFound";
import HardCodedBlog from "./Pages/HardCodedBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more-blogs" element={<MoreBlogs />} />
          <Route path="/becoming-a-better-developer" element={<HardCodedBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
