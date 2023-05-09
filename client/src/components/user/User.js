import React, { useState } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";

const User = () => {
  const navigator = useNavigate();
  const [show, setShow] = useState(false);
  if (!window.localStorage.getItem("user")) {
    window.localStorage.clear();
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const profileImage = user?.profileImage;
  const signOut = () => {
    if (window.localStorage) {
      localStorage.clear();
      setShow(!show);
    }
  };
  return (
    <>
      <div className="user_section">
        <div className="profile_image_section" onClick={() => setShow(!show)}>
          {user ? (
            <img src={profileImage} alt="profile-imag" />
          ) : (
            <AiOutlineUserAdd />
          )}
        </div>
        <div
          className="user_section_list"
          style={{ display: show ? "block" : "none" }}
        >
          {user ? (
            <>
              <p onClick={signOut}>Logout</p>
              <p onClick={() => navigator("/library")}>Library</p>
            </>
          ) : (
            <>
              <p onClick={() => navigator("/signin")}> Login</p>
              <p onClick={() => navigator("/signup")}>Signup</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
