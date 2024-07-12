import { useState } from "react";
import axios from "axios";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import "./Login.css";

function Login({ onLogin }) {
  const [data, setData] = useState({
    UserName: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { UserName, password } = data;
    try {
      const response = await axios.post("/verifyuser", {
        UserName,
        password,
      });
      if (response.data) {
        const temp = UserName;
        setData({ UserName: "", password: "" });
        onLogin(true);
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login_logo">
        <AirplanemodeActiveIcon className="login_logo_logo" />
      </div>
      <div className="login_login">
        <div className="login_text">
          Happening now
          <span>
            <br /> Join today.
          </span>
        </div>
        <form onSubmit={loginUser}>
          <input
            type="text"
            placeholder="user name"
            value={data.UserName}
            onChange={(e) => setData({ ...data, UserName: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
