import React, { useState } from "react";
import "./style/auth.css";
import { signIn } from "../helper/signIn";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Signin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  const handleSignin = (event) => {
    event.preventDefault();
    if (data.email === "" || data.password === "") return;
    setLoading(true);

    signIn(data).then(({ user }) => {
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    });
  };
  return (
    <section id="auth_page">
      <div className="Auth_section">
        <form>
          <input
            onChange={handleChange("email")}
            type="email"
            id="email"
            placeholder="Email"
          />

          <input
            onChange={handleChange("password")}
            type="password"
            id="password"
            placeholder="Password"
          />
          <button onClick={handleSignin}>
            {loading ? (
              <AiOutlineLoading3Quarters className="rotate" />
            ) : (
              "Signin"
            )}
          </button>
        </form>
        <p>
          Don't have Accout?<Link to={"/signup"}>Signup</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Signin;
