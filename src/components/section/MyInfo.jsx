import React from 'react'

const MyInfo = (props) => {
  return (
      <div className={props.attr}>
        <div className="myInfo_name">
            <h2><span>김도현님</span>의 성장 여정이에요.</h2>
        </div>
        <div className="myInfo_box">
            <a href="#">
                <div className="myInfo_box_shild">
                    <div className="myInfo_box2">
                        <p>정복중인 레벨</p>
                    </div>
                    <div className="myInfo_box3">
                        <span>1</span><em>레벨</em>
                    </div>
                </div> 
                <img className="AegzswwsBVc8X7_R6mHo" src="https://d1nuzc1w51n1es.cloudfront.net/410a322070ecd6a31b2c.png" alt="정복중인 레벨 아이콘" />
            </a>
            <a href="#">
                <div className="myInfo_box_shild">
                    <div className="myInfo_box2">
                        <p>현재 랭킹</p>
                    </div>
                    <div className="myInfo_box3">
                        <span>34,938</span><em>위</em>
                    </div>
                </div> 
                <img className="AegzswwsBVc8X7_R6mHo" src="https://d1nuzc1w51n1es.cloudfront.net/87233c1b6171f4b6fdfa.png" alt="현재 랭킹 아이콘" />
            </a>
            <a href="#">
                <div className="myInfo_box_shild">
                    <div className="myInfo_box2">
                        <p>해결한 코딩테스트</p>
                    </div>
                    <div className="myInfo_box3">
                        <span>97</span><em>문제 해결</em>
                    </div>
                </div> 
                <img className="AegzswwsBVc8X7_R6mHo" src="https://d1nuzc1w51n1es.cloudfront.net/c74175c3bd1106944db4.png" alt="해결한 코딩테스트 아이콘" />
            </a>
            <a href="#">
                <div className="myInfo_box_shild">
                    <div className="myInfo_box2">
                        <p>채용 현황 관리</p>
                    </div>
                    <div className="myInfo_box3">
                        <span>0%</span><em>완성도</em>
                    </div>
                </div> 
                <img className="AegzswwsBVc8X7_R6mHo" src="https://d1nuzc1w51n1es.cloudfront.net/b4786c86ab1e07b15d63.png" alt="채용 현황 관리 아이콘" />
            </a>
        </div>
    </div>
  )
}

export default MyInfo
