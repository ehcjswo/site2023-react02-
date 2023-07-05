import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = (props) => {
  return (
    <div className={props.attr}>
       <div id="test-slide" className="swiper-container">
            <div className="swiper-wrapper">
            <Swiper
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                onSlideChange={(swiper) => {
                    const slideIndex = swiper.realIndex + 1;
                    const slideIndexElement = document.querySelector('.slide-index');
                    slideIndexElement.textContent = '0'+slideIndex;
                }}
                onSwiper={(swiper) => {
                    const initialSlideIndex = swiper.realIndex + 1;
                    const slideIndexElement = document.querySelector('.slide-index');
                    slideIndexElement.textContent = '0' + initialSlideIndex;
                  }}
                
                modules={[Autoplay, Navigation, Pagination]}
            >
                <SwiperSlide>
                <div className="swiper-slide s1" style={{background: 'linear-gradient(231.73deg, #031E4B 0%, #031E4B 100%)'}}>
                    <div className="slider">
                        <div className="desc">
                            <div className="box">
                                현대모비스
                            </div>
                            <h3>23년 현대모비스<br />알고리즘 경진대회</h3>
                            <p>총 상금 1억 6천만원<br />
                            참가접수:5.26(금)~6.23(금)</p>
                        </div>
                        <div className="slider_img">
                            <img src="https://asset.programmers.co.kr/image/origin/production/banner/166637/58af7b59-1e70-4a5a-8b7d-626230f6583b.png" alt="현대모비스_메인배너" />
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide s2" style={{background: '#2DD297'}}>
                    <div className="slider">
                        <div className="desc">
                            <div className="box">
                                데브매칭
                            </div>
                            <h3>Dev-Matching<br />웹 프론트엔드 개발자</h3>
                            <p>접수 마감:6.15.(목)<br />
                            테스트:6.17.(토)</p>
                        </div>
                        <div className="slider_img">
                            <img src="https://asset.programmers.co.kr/image/origin/production/banner/166719/08131bdf-178f-45ce-bce3-0c7702c436f0.png" alt="FE 개발자(상-2) 데브매칭 이미지" />
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide s3" style={{background: '#2DD297'}}>
                    <div className="slider">
                        <div className="desc">
                            <div className="box">
                                내일배움코스
                            </div>
                            <h3>수강 완료하면 무료인<br />국비지원 강의 모음</h3>
                            <p>100% 온라인 교육을 원하는 난이도로 공부하세요!</p>
                        </div>
                        <div className="slider_img">
                            <img src="	https://grepp-programmers.s3.amazonaws.com/production/file_resource/3435/PRGMS_Main-Banner_KDC_1440x552_.png" alt="내일배움코스 이미지" />
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide s4" style={{background: '#1D1D1B'}}>
                    <div className="slider">
                        <div className="desc">
                            <div className="box">
                                무료특강
                            </div>
                            <h3>온라인 라이브로 듣는<br />최신 기술 트렌드</h3>
                            <p>인공지능,자율주행,데이터 엔지니어링,시스템 소프트웨어<br />
                            분야의 실무자를 직접 만날 수 있어요!</p>
                        </div>
                        <div className="slider_img">
                            <img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/3400/PRGMS_Main-Banner_KDC_1440x552___1_.png" alt="데브코스 미리보기 메인 이미지" />
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide s5" style={{background: '#432F94'}}>
                    <div className="slider">
                        <div className="desc">
                            <div className="box">
                                기획전
                            </div>
                            <h3>프로그래머스<br />인기 강의 TOP13</h3>
                            <p>선배 개발자의 노하우를 내 것으로 만들어요!</p>
                        </div>
                        <div className="slider_img">
                            <img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/3533/2306_banner__1_.png" alt="데브코스 미리보기 메인 이미지" />
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-num"><span className="slide-index">0 </span> | <p>05</p></div>
            <div className="swiper-button-next"></div>
        </div>
    </div>
  )
}

export default Slider
