import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(true);

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
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  });

  return (
    <div className="ui container" ref={ref} style={{ margin: "25px 0" }}>
      <button
        className={`ui button ${selected.value}`}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Toggle Dropdown
      </button>

      {showDropDown ? (
        <div className="ui vertical menu">
          <div className="header item">All Colors</div>
          <div
            onClick={() => setOpen(!open)}
            className={`ui fluid selection dropdown ${
              open && "visible active"
            }`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open && "visible transition"}`}>
              {renderOptions}
            </div>
          </div>
        </div>
      ) : null}
      <div className={`ui message ${selected.value}`}>
        Message color is {selected.label}
      </div>
    </div>
  );
};

export default Dropdown;
