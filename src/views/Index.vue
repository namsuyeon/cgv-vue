<template>
    <div class="body">
        <div class="display-movie">
            <div class="background-main">
                <main>
                    <section>
                    <!--상영영화 동영상 슬라이드-->
                        <div class="slide">
                            <ul>
                                <li><a href="#"><img src="../assets/Inzil.jpg" width="110%"></a></li>
                                <li><a href="#"><img src="../assets/Sence.jpg" width="110%"></a></li>
                                <li><a href="#"><img src="../assets/Squad.jpg" width="110%"></a></li>
                            </ul> 
                        </div>
                        <div id="container">
                            <ul class="movie-list">
                                <li>
                                    <a href="#"><img src="../assets/poster1.jpg" width="230vw"></a>
                                    <div class="caption">
                                        내전으로 고립된 낯선 도시, 모가디슈<br>
                                        지금부터 우리의 목표는 오로지 생존이다!<br>
                                        대한민국이 UN가입을 위해 동분서주하던 시기<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/poster2.jpg" width="230vw"></a>
                                    <div class="caption">
                                        가족 같은 회사로 모십니다<br>
                                        베이비 주식회사의 레전드 보스 베이비에서 인생 만렙 CEO가 된 ‘테드’.<br>
                                        베이비인 줄 알았던 조카 ‘티나’가 알고 보니 베이비 주식회사<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/poster3.jpg" width="230vw"></a>
                                    <div class="caption">
                                        디즈니 제작! 이번엔 아마존이다! 미지의 세계 아마존에서 관광객들에게 최고의 스릴을 선사하는 재치 넘치는 크루즈 선장 프랭크(드웨인 존슨). 고대 아마존의 전설을 쫓아 영국에서 온 식물 탐험가<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/poster4.jpg" width="230vw"></a> 
                                    <div class="caption">
                                        "모든 것을 바꾼 그녀의 선택” 어벤져스의 운명을 바꾼 블랙 위도우, 그녀의 진짜 이야기가 시작된다! 어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는 자신의 과거와 연결된 레드룸의 거대한 음모와<br>
                                        <br>
                                        <router-link to="/reserve" class="btn-shape">예매하기</router-link><br>
                                    </div>
                                </li>
                            </ul>
                            <div class="more">
                                <router-link to="/movie">더보기&gt;</router-link>
                            </div>
                        </div>
                    </section> 
                </main>               
            </div>
        </div>
        
        <div class="display-footer">
            <div class="background-footer">
                <p class="contact">CONTACT<br>
                주소 : 충청북도 청주시 서원구 충대로1, 충북대학교
                대표번호 : 010-7647-0877 | 010-7935-2882<br>
                TEL : 043)261-2114<br>
                대표이사 : 남수연, 최서현<br>
                Copyright 2021 movie project (c) Allrights Reserved
                </p>
            </div>                
        </div>
    </div>
</template>

<style scoped>
#container ul {list-style-type: none; margin-left: -5%; margin-top: -2%;}
#container li {
    display: inline-block;
    width: 230px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    
}

.white-font {
    color: #fff;
}
.movie-list {
    margin-left: 50px;
}

.movie-list .caption {
    color: white;
    font-size: 1vw;
    position: absolute;
    top: 200px;
    width: 230px;
    height: 70%;
    padding-top: 50%;
    background-color: rgba(0,0,0,0.6);
    opacity: 0;
    z-index: 10;
    transition: all 0.5s ease-in-out;
}

.movie-list li:hover .caption {
    opacity: 1;
    transform: translateY(-220px);
}
.slide {
    height:100%; overflow:hidden;
}
.slide ul{width:300%;display:flex;animation:slide 8s infinite;}
.slide li {width:40%; height: 100%;}

@keyframes slide {
    0% {margin-left: -3%;}
    15% {margin-left: -3%;}
    30% {margin-left:-103.5%;}
    45% {margin-left:-103.5%;}
    65% {margin-left: -203.5%}
    85% {margin-left: -203.5%;}
    100% {margin-left: -3%;}
}
.caption button[type=submit] {
    border-radius: 0px;
    width: 100px;
    border: none;
    font-size: 1.1vw;
}

.btn-shape {
    margin: 0px auto;
    width: 100px;
    padding: 5px;
    background-color: #fff;
    border-radius: 25px;
    text-align: center;
    margin-bottom: 10px;
}
.more {
    text-align: right;
    margin-top: -5%;
    font-size: 1vw;
}

.display-movie {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    width: 100%;
    padding : 1% 0%;
}
.background-main {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    width: 75%;
    padding: 1% 1%;
    
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255, 0.3);
    border-radius: 2ex;
    overflow: hidden;
}
</style>