import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faKeyboard,
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [text, setText] = useState("");

  const onInputChange = e => {
    setText(e.target.value);
  };

  const onEnterKeyUp = e => {
    if (window.event.keyCode == 13) {
      location.href = `https://www.google.com/search?sxsrf=ACYBGNSVp4RbTZncRHXTRtpUk2TNWNl2Vw%3A1580969349237&source=hp&ei=ha07Xr6AC4uJoATOkKagAQ&q=${text}&oq=${text}&gs_l=psy-ab.3..35i39j0l9.83259.84385..84466...8.0..6.142.1513.0j13......0....1..gws-wiz.....10..35i362i39j0i131.zhXFAlsQvmo&ved=0ahUKEwj-1tXjobznAhWLBIgKHU6ICRQQ4dUDCAY&uact=5`;
    }
  };

  const onSearchButtonClicked = () => {
    if (text != "") {
      location.href = `https://www.google.com/search?sxsrf=ACYBGNSVp4RbTZncRHXTRtpUk2TNWNl2Vw%3A1580969349237&source=hp&ei=ha07Xr6AC4uJoATOkKagAQ&q=${text}&oq=${text}&gs_l=psy-ab.3..35i39j0l9.83259.84385..84466...8.0..6.142.1513.0j13......0....1..gws-wiz.....10..35i362i39j0i131.zhXFAlsQvmo&ved=0ahUKEwj-1tXjobznAhWLBIgKHU6ICRQQ4dUDCAY&uact=5`;
    }
  };
  const onLuckyButtonClicked = () => {
    location.href = "https://www.google.com/doodles/";
  };
  return (
    <>
      <div className="searchBar">
        <div className="searchBar-icon1 searchBar-content">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="searchBar-input searchBar-content">
          <input
            type="text"
            id="searchBar-inputField"
            value={text}
            onChange={onInputChange}
            onKeyUp={onEnterKeyUp}
          />
        </div>
        <div className="searchBar-icon2 searchBar-content">
          <FontAwesomeIcon icon={faKeyboard} title="입력 도구" />
        </div>
        <div className="searchBar-icon3 searchBar-content">
          <FontAwesomeIcon icon={faMicrophone} title="음성 검색" />
        </div>
      </div>
      <div className="buttons">
        <span className="main-button" onClick={onSearchButtonClicked}>
          Google 검색
        </span>
        <span className="main-button" onClick={onLuckyButtonClicked}>
          I'm Feeling Lucky
        </span>
      </div>
    </>
  );
};

export default SearchBar;
