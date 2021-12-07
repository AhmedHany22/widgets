import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

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

  return (
    <div className="ui container" ref={ref} style={{ margin: "25px 0" }}>
      <button
        className={`ui button ${selected.value}`}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Toggle Dropdown
      </button>

      {showDropDown ? (
        <div className="ui form menu">
          <div className="header item">{label}</div>
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
