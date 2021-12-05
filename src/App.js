import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";

const App = () => {
  const items = [
    {
      title: "What is a dog?",
      content:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    },
    {
      title: "What kinds of dogs are there?",
      content:
        "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
    },
    {
      title: "How do you acquire a dog?",
      content:
        "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.",
    },
  ];

  const showAccordion = () => {
    if (window.location.pathname === "/") return <Accordion items={items} />;
  };
  const showSearch = () => {
    if (window.location.pathname === "/search") return <Search />;
  };
  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") return <Dropdown />;
  };
  const showTranslate = () => {
    if (window.location.pathname === "/translate") return <Translate />;
  };

  return (
    <div className="ui">
      {showAccordion()}
      {showSearch()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;

// const App = () => {

//   const options = [
//     { label: "Red", value: "red" },
//     { label: "Blue", value: "blue" },
//     { label: "Green", value: "green" },
//   ];
//   const [selectedColor, setSelectedColor] = useState(options[0]);

//   return (
//     <Dropdown
//       options={options}
//       selected={selectedColor}
//       onSelectedChange={setSelectedColor}
//     />
//   );
// };

// export default App;
