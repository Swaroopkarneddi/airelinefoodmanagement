import { useState } from "react";
import axios from "axios";
import "./App.css";
import Login from "./maincomp/Login";
import Order from "./maincomp/Order";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [musername, setmusername] = useState();

  return (
    <>
      {/* {isLoggedIn ? <Order /> : <Login onLogin={() => setIsLoggedIn(true)} />} */}

      {isLoggedIn ? <Order /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </>
  );
}

export default App;
