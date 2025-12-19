import React, { useState } from "react";

export default function ImageWithFallBack({ src, alt = "image", style = {}, className = "", fallback = "/images/fallback.svg", ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={(e) => {
        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
        setImgSrc(fallback);
      }}
      {...rest}
    />
  );
}
