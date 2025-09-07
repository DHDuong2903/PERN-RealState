import { useState } from "react";
import PropTypes from "prop-types";

const Image = ({ src, fallbackSrc, alt = "ALT", ...props }) => {
  const [imageUrl, setImageUrl] = useState(src);
  return <img onError={() => setImageUrl(fallbackSrc)} src={imageUrl} alt={alt} {...props} />;
};

export default Image;
Image.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallbackSrc: PropTypes.string,
};
