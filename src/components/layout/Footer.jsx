import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className="pt">
        <div className="footer_inner">
            <div className="footer_top">
                <div className="footer_top_left">
                    <ul>
                        <li className="li_top">서비스</li>
                        <li>개발자용 프로그래머스</li>
                        <li>기업용 프로그래머스</li>
                    </ul>
                    <ul>
                        <li className="li_top">문의</li>
                        <li>개발자용 프로그래머스</li>
                        <li>기업용 프로그래머스</li>
                    </ul>
                    <ul>
                        <li className="li_top">고객센터</li>
                        <li>개발자용 프로그래머스</li>
                        <li>기업용 프로그래머스</li>
                    </ul>
                </div>
                <button className="family" aria-label="패밀리 사이트 선택"><span className="i_POFD3q612sN8PqLk0G">패밀리사이트</span><svg width="8" height="5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.866l-4-4h8l-4 4z" fill="#263747"></path></svg></button>
            </div>
            <div className="footer_mid">
                <a href="#">2023 프로그래머스</a>
                <p>(주)그렙 / 대표 임성수 / 서울특별시 서초구 강남대로 327, 2층 프로그래머스(서초동, 대륭서초타워) / 사업자등록번호 220-88-75699 / 통신판매업신고 제 2014-서울강남-03241호<br/> / 직업정보제공사업 신고번호 J1200020180027 / (주)그렙은 통신판매중개자로서, 통신판매의 당사자가 아니며 중개하는 콘텐츠 및 거래에 대한 책임을 부담하지 않습니다. 단, (주)<br/>그렙이 직접 제공하는 콘텐츠에 대해서는 책임을 부담합니다. 프로그래머스 사이트의 모든 콘텐츠, 정보, UI, HTML 소스 등에 대한 무단 복제, 전송, 배포, 크롤링, 스크래핑 등의 행위<br/>를 거부하며, 이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.</p>
            </div>
            <div className="footer_bottom">
                <ul>
                    <li className="li_bottom">개인정보 처리방침</li>
                    <li>이용약관</li>
                    <li>프로그래머스 인재 채용</li>
                </ul>
                <div className="icon">
                    <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M20.453 10.382c0-5.54-4.464-10.03-9.971-10.03S.51 4.842.51 10.382c0 5.007 3.646 9.156 8.413 9.909v-7.01H6.392v-2.899h2.532v-2.21c0-2.514 1.488-3.902 3.766-3.902 1.09 0 2.232.196 2.232.196v2.468h-1.257c-1.239 0-1.625.773-1.625 1.567v1.881h2.765l-.442 2.9H12.04v7.009c4.766-.753 8.413-4.902 8.413-9.909z" fill="#D2D2D2"></path></svg>
                    <svg width="21" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M10.415.297h.05l.378.002c.634.004 1.832.017 3.095.058l.508.018c1.527.059 3.053.162 3.72.341.858.231 1.534.911 1.763 1.775.361 1.356.41 3.99.416 4.668v.325c-.007.678-.055 3.312-.416 4.668a2.506 2.506 0 01-1.763 1.775c-.63.17-2.026.27-3.466.33l-.508.02c-1.524.054-3.001.066-3.571.068l-.155.001H10.127a122.94 122.94 0 01-3.57-.069l-.51-.02c-1.439-.06-2.835-.16-3.465-.33A2.506 2.506 0 01.82 12.152C.444 10.744.407 7.958.403 7.414v-.186C.407 6.685.444 3.9.819 2.491A2.506 2.506 0 012.582.716C3.878.366 8.425.308 9.905.3l.378-.002h.132zm-2.08 4.06v5.93l5.212-2.965-5.213-2.965z" fill="#D2D2D2"></path></svg>
                    <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M18.245.352c1.102 0 1.994.892 1.994 1.993v15.952a1.994 1.994 0 01-1.994 1.994H2.292a1.994 1.994 0 01-1.994-1.994V2.345c0-1.1.893-1.993 1.994-1.993h15.953zm-7.79 3.987H6.28v11.964h4.175c1.695 0 2.919-.259 3.67-.776.753-.518 1.13-1.35 1.13-2.497 0-.944-.25-1.678-.747-2.2a2.707 2.707 0 00-.92-.62c-.37-.158-.81-.258-1.32-.301.834-.075 1.461-.325 1.884-.752.428-.438.642-1.038.642-1.8 0-1.004-.362-1.759-1.085-2.265-.671-.466-1.655-.715-2.95-.749l-.304-.004zm0 6.538c.787 0 1.35.142 1.692.425.341.282.512.746.512 1.392 0 .635-.162 1.08-.486 1.336-.33.256-.902.384-1.718.384H8.754v-3.537h1.7zm0-4.657c.376 0 .67.032.88.096.212.064.378.144.5.24.15.123.257.272.32.448.064.176.096.382.096.616 0 .267-.034.482-.104.645-.07.162-.17.297-.304.404a1.353 1.353 0 01-.538.248 3.71 3.71 0 01-.85.08H8.754V6.22h1.7z" fill="#D2D2D2"></path></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
