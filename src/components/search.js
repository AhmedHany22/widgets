import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const searchId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
      return () => {
        clearTimeout(searchId);
      };
    }
  }, [term]);

  const renderList = results.map((item) => {
    return (
      <div
        className="item"
        style={{ borderColor: "DodgerBlue" }}
        key={item.pageid}
      >
        <div
          className="right floated content"
          style={{ margin: "20px 0 10px" }}
        >
          <a
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            className="ui button"
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content" style={{ margin: "20px 0 10px" }}>
          <h4 className="ui blue header">{item.title}</h4>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="ui center aligned basic inverted segment">
        <div className="ui search">
          <div className="ui icon input">
            <input
              type="text"
              value={term}
              className="prompt"
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search countries..."
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui middle aligned divided list container">
        {renderList}
      </div>
    </React.Fragment>
  );
};

export default Search;
