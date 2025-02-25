import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import { PostDetail } from "./posts/PostDetail";
import { Header } from "./Header";
import { Contact } from "./Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
