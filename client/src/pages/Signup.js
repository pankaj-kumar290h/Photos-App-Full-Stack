import React, { useState } from "react";
import { signUpRequest } from "../helper/signUp";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };
  const handleChangeFile = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.name === "" || data.userName === "" || data.password === "")
      return;
    setLoading(!loading);
    const { user } = await signUpRequest({ ...data }, image);
    setLoading(!loading);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
  return (
    <section id="auth_page">
      <div className="Auth_section">
        <form>
          <input
            onChange={handleChange("userName")}
            type="text"
            id="username"
            placeholder="Username"
          />

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
          <input onChange={handleChangeFile} type="file" id="image" />
          <button onClick={handleSubmit}>
            {loading ? (
              <AiOutlineLoading3Quarters className="rotate" />
            ) : (
              "Signup"
            )}
          </button>
        </form>
        <p>
          Already have Accout?<Link to={"/signin"}>Signin</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Signup;
