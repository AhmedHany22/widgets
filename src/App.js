import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

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
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];
  const [selectedColor, setSelectedColor] = useState(options[0]);

  return (
    <React.Fragment>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selectedColor}
          onSelectedChange={setSelectedColor}
        />
      </Route>
      <Route path="/translate">
        <Translate items={items} />
      </Route>
    </React.Fragment>
  );
};

export default App;
