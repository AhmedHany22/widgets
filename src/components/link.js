import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.crtlKey) return;
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
