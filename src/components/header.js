import React, { useState } from "react";

const Header = () => {
  const headers = [
    { path: "/", label: "Accordion" },
    { path: "/search", label: "Search" },
    { path: "/dropdown", label: "Dropdown" },
    { path: "/translate", label: "Translate" },
  ];
  const [current, setCurrent] = useState(0);
  return (
    <div className="ui inverted pointing menu">
      {headers.map((header, index) => {
        return (
          <a
            href={header.path}
            onClick={() => {
              setCurrent(index);
            }}
            className={`item ${current === index ? "active" : ""}`}
          >
            {header.label}
          </a>
        );
      })}
    </div>
  );
};

export default Header;
