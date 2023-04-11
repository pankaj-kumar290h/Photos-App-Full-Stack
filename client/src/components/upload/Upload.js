import React, { useState } from "react";
import axios from "axios";
import "./upload.css";

const Upload = ({ reload }) => {
  const [progress, setProgress] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  const handleFile = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    formData.append("userId", userId);

    axios
      .post("/api/v1/user/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
          setProgress(Math.round(100 * event.loaded) / event.total);
        },
      })
      .then((e) => {
        reload();
      });
  };

  return (
    <>
      <div className="upload_button">
        <div className="upload">
          <input onChange={handleFile} type="file" />
        </div>
        <br />
        <section className="progress_status">
          <p>{progress ? `${progress}%` : ""}</p>
        </section>
        <div className="progressbar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Upload;
