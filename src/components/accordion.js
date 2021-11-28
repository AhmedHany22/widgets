import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectItem = (i) => {
    setActiveIndex(i);
  };
  const renderAccordion = items.map((item, index) => {
    const active = activeIndex === index ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => selectItem(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p className="transition visible">{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled fluid accordion">{renderAccordion}</div>;
};

export default Accordion;
