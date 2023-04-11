import React, { useState } from "react";
import "./ImageCard.css";
import { AiOutlineCloudDownload, AiOutlineCloseCircle } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { bookmark } from "../helper/handleBookmarkRequest";

function ImageCard({ obj, showBookmark }) {
  const [show, setShow] = useState(false);
  const model = () => {
    setShow(!show);
  };

  const handleBookmark = async (event) => {
    event.stopPropagation();

    let res = await bookmark(obj.urls.raw);
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
          <img src={obj.urls ? obj?.urls?.regular : obj} alt="j" />
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
              <BsBookmarkHeart />
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ImageCard;
