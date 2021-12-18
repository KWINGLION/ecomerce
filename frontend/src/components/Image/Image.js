import React from "react";
import { ImageWrapper } from "./styles";

const Image = ({ url, path = null }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <ImageWrapper>
      {skeleton && <div />}
      <img
        onLoad={handleLoad}
        src={`http://localhost:1337${
          path !== null ? path : url.formats.medium.url
        }`}
        alt={url.alternativeText}
      />
    </ImageWrapper>
  );
};

export default Image;
