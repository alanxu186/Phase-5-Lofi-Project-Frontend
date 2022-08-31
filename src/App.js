import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Home from "./components/Home";
import About from "./components/About";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile"
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />}/>
      </Routes>

    </div>
  );
}

export default App;
