import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        background: "#1a1c21",
        color: "#fff",
        width: "auto",
        height: "12.5vh",
        overflow: "hidden",
        padding: "0 20px",
      }}
    >
      <p>
        Teste Codeby &copy; | Desenvolvido por&nbsp;
        <a href="https://linkedin.com/in/palomasamorais">
          <strong>Paloma S. A. Morais</strong>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
