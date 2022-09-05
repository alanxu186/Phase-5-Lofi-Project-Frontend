import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Home from "./components/Home";
import About from "./components/About";
import Bookmark from "./components/Bookmark";
import Profile from "./components/Profile"
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

  const {currentUser} = useSelector(state => state.user)

  return (
    <div className="App">
    { currentUser ? 
    <>
      <Navbar /> 
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />}/>
      </Routes> 
      </>
      :
      <Login/>

    }
    </div>
  );
}

export default App;
