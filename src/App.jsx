import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import { PostDetail } from "./posts/PostDetail";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
