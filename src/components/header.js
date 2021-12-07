import React, { useState } from "react";
import Link from "./link";

const headers = [
  { path: "/", label: "Accordion" },
  { path: "/search", label: "Search" },
  { path: "/dropdown", label: "Dropdown" },
  { path: "/translate", label: "Translate" },
];
const Header = () => {
  const renderHeader = headers.map((header) => {
    return (
      <Link key={header.path} href={header.path} className={`item`}>
        {header.label}
      </Link>
    );
  });

  return <div className="ui inverted pointing menu">{renderHeader}</div>;
};

export default Header;
