import React, { useState } from "react";
import "./ImageCard.css";
import { AiOutlineCloudDownload, AiOutlineCloseCircle } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { bookmark } from "../helper/handleBookmarkRequest";
import { toast } from "react-toastify"


function ImageCard({ obj, showBookmark }) {

  const [show, setShow] = useState(false);
  const model = () => {
    setShow(!show);
  };


  const handleBookmark = async (event) => {
    event.stopPropagation();


    const user = await JSON.parse(localStorage.getItem("user"));
    if (!user) {
      toast.error("Plz login", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      return;
    }
    await bookmark(obj.urls.raw);

  };
  return (
    <>
      <div style={{ display: show ? "block" : "none" }} className="model">
        <p onClick={model}>
          <AiOutlineCloseCircle />
        </p>
        <div onClick={model}>
          <img src={obj.urls ? obj?.urls?.regular : obj} alt="k" />
        </div>
      </div>
      <div onClick={model} className="card_body">
        <div className="image">
          {obj.user && (<div id="photo_user">
            <img src={obj.user.profile_image.large} alt="" />
            <p>{obj.user.name}</p>

          </div>
          )}
          <img id="card_image_small" src={obj.urls ? obj?.urls?.small : obj} alt="j" />
          <a
            onClick={(e) => {
              e.stopPropagation();
            }}
            target="_blank"
            rel="noreferrer"
            className="download_button"
            href={obj.urls ? obj?.urls?.raw : obj}
            download
          >
            <AiOutlineCloudDownload />
          </a>

          {showBookmark && (
            <p onClick={handleBookmark} className="bookmark_button">
              <BsBookmarkHeart className="bookmark_icon" />
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ImageCard;
