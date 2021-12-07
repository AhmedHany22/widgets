import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  });

  return (
    <div
      className="ui black segment container"
      ref={ref}
      style={{ margin: "25px 0" }}
    >
      <div className="ui vertical menu">
        <div className="header item">{label}</div>
        <div
          onClick={() => setOpen(!open)}
          className={`ui fluid selection dropdown ${open && "visible active"}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open && "visible transition"}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
