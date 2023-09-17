import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <>
      <div className="preloader">
        <div className="preload-container max-[640px]:flex-col">
          <span>Think.</span>
          <span>Create.</span>
          <span>Innovate.</span>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
