import React, { useEffect, useState } from "react";
import { fetchAllPhotos } from "../helper/fetchAllPhots";
import ImageCard from "../components/ImageCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Upload from "../components/upload/Upload";
import { ErrorBoundary } from "react-error-boundary";
const Library = () => {
  const [photos, setPhotos] = useState([]);
  const [reload, setReload] = useState(false);
  const changeRelod = () => {
    setReload(!reload);
  };
  useEffect(() => {
    fetchAllPhotos()
      .then((data) => setPhotos(data.AllPhotos))
      .catch((err) => console.log(err));
  }, [reload]);

  return (
    <>
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <section id="header">
          <Upload reload={changeRelod} />
        </section>
        <div className="image_section">
          {photos.length ? (
            photos.map((e) => {
              return (
                <ImageCard
                  key={crypto.randomUUID()}
                  obj={e}
                  showBookmart={false}
                />
              );
            })
          ) : (
            <div className="loading">
              <AiOutlineLoading3Quarters className="rotate" />
            </div>
          )}
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Library;
