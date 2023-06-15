import React, { useState, useEffect } from "react";
import { random_photo, Search_photo } from "../api";
import ImageCard from "./ImageCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Images({ props }) {
  const [data, setData] = useState([]);
  console.log(data)

  const random = async () => {
    const data = await fetch(`${random_photo}`).then((value) => value.json());

    setData(data);
  };
  const SearchPhoto = async () => {
    let url = Search_photo.replace("$$q", props);

    const data = await fetch(`${url}`).then((value) => value.json());

    setData(data.results);
  };
  useEffect(() => {
    if (!props.length) {
      random();
    } else {
      setData([]);
      SearchPhoto();
    }
  }, [props]);
  return (
    <div className="image_section">
      {data.length ? (
        data.map((e) => {
          return <ImageCard key={e.id} obj={e} showBookmark={true} />;
        })
      ) : (
        <div className="loading">
          <AiOutlineLoading3Quarters className="rotate" />
        </div>
      )}
    </div>
  );
}

export default Images;
