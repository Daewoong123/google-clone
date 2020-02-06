import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const user_info = "Google 계정: 변대웅\n(dwbyun16@gmail.com)";

  return (
    <div id="header">
      <div className="header-contents">
        <span
          className="header-content header-text1"
          onClick={() => (location.href = "https://mail.google.com/")}
        >
          Gmail
        </span>
        <span
          className="header-content header-text2"
          onClick={() =>
            (location.href = "https://www.google.co.kr/imghp?hl=ko&tab=wi&ogbl")
          }
        >
          이미지
        </span>
        <span className="header-content header-icon">
          <FontAwesomeIcon icon={faTh} title="Google 앱" />
        </span>
        <span className="header-content header-user" title={user_info}>
          대웅
        </span>
      </div>
    </div>
  );
};

export default Header;
