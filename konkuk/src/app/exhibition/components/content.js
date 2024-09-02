import React from 'react';

const Content = () => {
    return (
        <main className="main-content">
            <div className='main-left'>
                <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/img/exhibition_title.mp4"
                />
            </div>
            <div className='main-right'>
                <img src='/img/title3.png' className="exhibition-logo"></img> <br/>
                
                <h2 className='.exhibition-title'>
                    <p className='title1'>각 :</p>
                    <p className='title2'>各/角/閣/覺/格</p> 
                    
                </h2>
                <p className="exhibition-content">
                    건축은 단순한 구조물의 집합이 아닙니다.<br/>
                    그것은 형태와 기능, 그리고 그 뒤에 숨겨진 철학과 예술의 만남입니다.<br/>
                    이번 졸업전시의 주제인 ‘각’은 이러한 건축의 다차원적 속성을 탐구하고자 합니다.<br/>
                    ‘각’은 기하학적 요소인 각도를 의미할 뿐만 아니라, 개별성과 독립성을 상징합니다.<br/>
                    이번 전시는 ‘각’이라는 단어를 통해 다양성을 추구하는 건국대학교 건축학부의 <br/>
                    건축적 지향점을 드러내고자 합니다.
                </p>

                <a href="www.naver.com"></a>
                <img src='/img/exhibition_btn.png' id="exhibition_btn"></img>

            </div>
            
        </main>
    );
};

export default Content;
