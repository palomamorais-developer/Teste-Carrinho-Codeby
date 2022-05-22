import React from "react";

const NotificationLabel = ({ children }) => {
  return (
    <div
      className="container"
      style={{
        background: "#c7ffa6",
        padding: "1px",
        borderRadius: "40px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <p style={{ color: "#217b16", fontWeight: "600", textAlign: "center" }}>
        {children}
      </p>
    </div>
  );
};

export default NotificationLabel;
