import React, { useState } from "react";
import Convert from "./convert";
import Dropdown from "./mDropdown";

const languages = [
  { label: "Arabic", value: "ar" },
  { label: "Afrikaans", value: "af" },
  { label: "German", value: "de" },
  { label: "Frisian", value: "fy" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
];

const Translate = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(languages[0]);

  return (
    <React.Fragment>
      <div className="ui form container" style={{ marginTop: "35px" }}>
        <div className="field">
          <div className="ui black segment">
            <label>Text to translate</label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
      </div>
      <Dropdown
        label={"Selelct a language"}
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <Convert text={text} language={language} />
    </React.Fragment>
  );
};

export default Translate;
