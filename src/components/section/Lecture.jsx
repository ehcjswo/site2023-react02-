import React from 'react'

const Lecture = (props) => {
  return (
    <div className={props.attr}>
        <h2 className="h2mb">클린 코드 비법을 알려 줄게요.</h2>
        <div className="lecture_inner">
            <div className="lecture_left">
                <h3 className="h3mb">수강 현황<span>0</span></h3>
                <div className="lecture_box">
                    <svg width="53" height="74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.797 13.688C39.043 9.603 31.68 6.832 23.232 6.832c-8.448 0-15.81 2.771-19.574 6.856H1v37.65c0 7.207 9.958 13.05 22.232 13.05V14.05h22.233v-.362H42.797z" fill="#EEF6FF" stroke="#0078FF" strokeMiterlimit="10"></path><path d="M45.465 14.05H23.232v43.244h22.233V14.05z" fill="#CCEAFD" stroke="#0078FF" strokeMiterlimit="10"></path><path d="M23.232 14.05h22.233C45.465 6.842 35.507 1 23.232 1 10.958 1 1 6.842 1 14.05c0 7.207 9.958 13.05 22.232 13.05V14.05z" fill="#fff" stroke="#0078FF" strokeMiterlimit="10"></path><path d="M52 22.767H29.768v50.338C42.042 73.105 52 67.263 52 60.055V22.767z" fill="#EEF6FF" stroke="#0078FF" strokeMiterlimit="10"></path><path d="M52 22.767H29.768v13.05C42.042 35.817 52 29.974 52 22.767z" fill="#fff" stroke="#0078FF" strokeMiterlimit="10"></path></svg>
                    <p>열심히 컨텐츠 준비중이에요.<br /> 프로그래머스의 다양한 코스를 탐색해보세요!</p>
                    <span className="btn1">코스 확인하러 가기</span>
                </div>
            </div>
            <div className="lecture_right">
                <div className="lecture_right_svg">
                    <h3 className="h3mb">추천 강의</h3>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="XFteHAoEX_O2i2sztwAI"><path d="M9 16.34l4.58-4.59L9 7.16l1.41-1.41 6 6-6 6z" fillRule="evenodd"></path></svg>
                </div>
                <div className="lecture_right_inner">
                    <div className="lecture_box2" style={{background: 'linear-gradient(224.02deg, rgb(23, 116, 198) 4.61%, rgb(0, 224, 190) 93.66%)'}}>
                        <div className="lecture_box2-1">
                            <p>[도서실습] 내일은<br />코딩테스트 with 파이썬<br />(자료구조와 알고리즘의<br />기초부터 실전까지)</p>
                            <span>무료</span>
                        </div>
                        <div className="lecture_box2-2">
                            <img src="https://d1nuzc1w51n1es.cloudfront.net/d49ce2ad08f6253fa226.png" alt="[도서실습] 내일은 코딩테스트 with 파이썬(자료구조와 알고리즘의 기초부터 실전까지)" />
                        </div>
                        <span className="btn2">강의 보러 가기</span>
                    </div>
                    <div className="lecture_box2" style={{background: 'linear-gradient(224.02deg, rgb(0, 67, 168) 4.61%, rgb(0, 130, 240) 93.66%)'}}>
                        <div className="lecture_box2-1">
                            <p>(AI 서비스와 함께)<br />누구나 활용하는<br />ChatGPT</p>
                            <span>무료</span>
                        </div>
                        <div className="lecture_box2-2">
                            <img src="https://d1nuzc1w51n1es.cloudfront.net/6a97cec8f662a1238d50.png" alt="(AI 서비스와 함께) 누구나 활용하는 ChatGPT" />
                        </div>
                        <span className="btn2">강의 보러 가기</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lecture
