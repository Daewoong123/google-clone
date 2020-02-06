import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bar">
        <span className="korea">대한민국</span>
      </div>
      <div className="footer-bar">
        <div className="footer-bar-column column1">
          <span>광고</span>
          <span>비즈니스</span>
          <span>Google 정보</span>
          <span>검색의 원리</span>
        </div>
        <div className="footer-bar-column column2">
          <span>개인정보처리방침</span>
          <span>약관</span>
          <span>설정</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
