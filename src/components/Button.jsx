import React from "react";

const Button = ({
  children,
  color = "#fff",
  background = "#0090ff",
  ...props
}) => {
  return (
    <button
      style={{
        color: color,
        background: background,
        padding: "1rem",
        width: "90%",
        border: 0,
        borderRadius: "10px",
        fontSize: "1.3rem",
        fontWeight: "600",
        cursor: "pointer",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
