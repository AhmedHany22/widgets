import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    const translateTimer = setTimeout(() => {
      if (text) translate();
    }, 1000);
    return () => {
      clearTimeout(translateTimer);
    };
  }, [text, language]);
  return <div className="ui black segment container">{translatedText}</div>;
};

export default Convert;
