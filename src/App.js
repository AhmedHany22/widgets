import React, { useState } from "react";
import Dropdown from "./components/dropdown";
// import Accordion from "./components/accordion";
// import Search from "./components/search";

const App = () => {
  // const items = [
  //   {
  //     title: "What is a dog?",
  //     content:
  //       "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  //   },
  //   {
  //     title: "What kinds of dogs are there?",
  //     content:
  //       "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  //   },
  //   {
  //     title: "How do you acquire a dog?",
  //     content:
  //       "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.",
  //   },
  // ];

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];
  const [selectedColor, setSelectedColor] = useState(options[0]);

  return (
    <Dropdown
      options={options}
      selected={selectedColor}
      onSelectedChange={setSelectedColor}
    />
  );
};

export default App;
