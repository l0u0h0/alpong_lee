import React from "react";

const Footer = (props: { thisYear: any }) => {
  const thisYear = props.thisYear;
  return (
    <footer>
      <div className="inner">
        <ul className="menu">
          <li>
            <a href="none">개인정보처리방침</a>
          </li>
          <li>
            <a href="none">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="none">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="none">위치정보 이용약관</a>
          </li>
          <li>
            <a href="none">삼치와 고등어 이용약관</a>
          </li>
          <li>
            <a href="none">윤리경영 핫라인</a>
          </li>
        </ul>
        <div className="btn-group">
          <a href="none" className="btn btn--white">
            찾아오시는 길
          </a>
          <a href="none" className="btn btn--white">
            신규곰돌이제의
          </a>
          <a href="none" className="btn btn--white">
            사이트 맵
          </a>
        </div>
        <div className="info">
          <span>사업자등록번호 000-111-2424</span>
          <span>(주)꾸미 코리아 볶음대표 짱맛나</span>
          <span>TEL : 041) 1234-5678 / FAX : 041) 5678-1234</span>
          <span>개인정보 책임자 : 임최나엄정</span>
        </div>
        <p className="copyright">
          &copy; <span className="this-year">{thisYear}</span> WBB Coffee
          Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
