import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <figure className="kg-card kg-image-card kg-card-hascaption">
        <img
          src="https://cdn.svgator.com/images/2023/06/iris-blades-css-spinner.svg"
          className="kg-image lightense-target bg-transparent"
          alt="Iris Blades CSS spinner"
          loading="lazy"
          width="700"
          height="400"
        />

      </figure>
    </div>
  );
};

export default Preloader;
