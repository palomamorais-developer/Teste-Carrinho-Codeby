import React from "react";

const Svg = ({ src }) => {
  return (
    <div style={{ width: "30px" }}>
      <img src={src} alt="" style={{ height: "auto", width: "100%" }} />
    </div>
  );
};

export default Svg;
