<template>
    <div class="body">
        <main class="display-movie">
            <div class="background">                
                <section>
                    <div class="movie-slide">
                        <ul>
                            <li><a href="#"><img src="../assets/movie-Inzil.jpg" width="110%"></a></li>
                            <li><a href="#"><img src="../assets/movie-Sence.jpg" width="110%"></a></li>
                            <li><a href="#"><img src="../assets/movie-Squad.jpg" width="110%"></a></li>
                        </ul> 
                    </div>
                    <div id="bottom">
                        <ul>
                            <li class="btn-shape-top5">현재 상영작 <span>TOP 5</span></li>
                            <li class="btn-shape-more"><router-link to="/movie_chart" class="btn-shape">더보기&nbsp;&gt;</router-link></li>
                        </ul>
                    </div>
                    <div id="movie-container">
                        <ul class="movie-list-top5">
                            <li>
                                <a href="#"><img src="../assets/poster1.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_15">모가디슈</p>
                                    <p class="movie-content">예매율 47.7%&nbsp;|&nbsp;개봉일 2021.07.28</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie1.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/poster2.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_all">보스 베이비 2</p>
                                    <p class="movie-content">예매율 5.2%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.07.21</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie2.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/poster4.jpg" width="200px"></a> 
                                <div>
                                    <p class="title year_12">블랙 위도우</p>
                                    <p class="movie-content">예매율 5.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.07.07</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie3.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/poster3.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_12">정글 크루즈</p>
                                    <p class="movie-content">예매율 1.7%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.07.28</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie4.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/109.jpg" width="200px"></a> 
                                <div>
                                    <p class="title year_15">콰이어트 플레이스 2</p>
                                    <p class="movie-content">예매율 0.6%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.06.16</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie5.html">상세보기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="bottom">
                        <ul>
                            <li class="btn-shape-top5">상영 예정작 <span>TOP 5</span></li>
                            <li class="btn-shape-more"><router-link to="/movie_be_schedule" class="btn-shape">더보기&nbsp;&gt;</router-link></li>
                        </ul>
                    </div>
                    <div id="movie-container">
                        <ul class="movie-list-top5">
                            <li>
                                <a href="#"><img src="../assets/104.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_19">더 수어사이드 스쿼드</p>
                                    <p class="movie-content">예매율 18.3%&nbsp;|&nbsp;개봉일 2021.08.04</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie6.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/105.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_all">극장판 도라에몽 : 진....</p>
                                    <p class="movie-content">예매율 5.6%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.08.05</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie7.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/106.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_15">그린 나이트</p>
                                    <p class="movie-content">예매율 5.2%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.08.05</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie8.html">상세보기</a>
                                </div>
                            </li>
                            <li>
                                <a href="#"><img src="../assets/107.jpg" width="200px"></a>
                                <div>
                                    <p class="title year_15">잘리카투</p>
                                    <p class="movie-content">예매율 0.2%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.08.05</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie9.html">상세보기</a>
                                </div> 
                            </li>
                            <li>
                                <a href="#"><img src="../assets/108.jpg" width="200px"></a> 
                                <div>
                                    <p class="title year_15">더 그레이트 샤크</p>
                                    <p class="movie-content">예매율 0.1%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 2021.08.05</p>
                                </div>
                                <div>
                                    <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                    <a class="btn-shape-button" href="detail-movie10.html">상세보기</a>
                                </div>  
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>      
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

.display-movie {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    width: 100%;
    padding : 1% 0%;
    
    
}
.background {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 75%;
    padding: 3% 4%;
    flex-direction: column; 
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}
.movie-slide {
    height:60%; overflow:hidden;
}
.movie-slide ul{width:300%;display:flex;animation:movie-slide 8s infinite;}
.movie-slide li {width:40%; height: 100%;}

@keyframes movie-slide {
    0% {margin-left: -3%;}
    15% {margin-left: -3%;}
    30% {margin-left:-103%;}
    45% {margin-left:-103%;}
    65% {margin-left: -204%}
    85% {margin-left: -204%;}
    100% {margin-left: -3%;}
}

span {
    color: red;
}


#movie-container ul {list-style-type: none;}
#movie-container li {
    display: inline-block;
    width: 200px;
    position: relative;
    overflow: hidden;
    margin: 5px;
}

#bottom {
    margin-left: 15px;
    margin-bottom: -25px;
}

#bottom ul {list-style-type: none;}
#bottom li {
    display: inline-block;
    width: 45%;
    position: relative;
    overflow: hidden;
    margin: 15px;
}

.btn-shape-more {
    margin: 0px auto;
    padding: 5px;
    background-color: #fff;
    text-align: right;
    margin-bottom: 10px;
    font-size: 0.9vw;
}

.btn-shape-top5 {
    margin: 0px auto;
    padding: 5px;
    background-color: #fff;
    text-align: left;
    margin-bottom: 10px;
    font-size: 1.38vw;
}

.btn-shape-button {
    border: 1px solid rgb(190, 59, 49);
    margin: 2px;
    width: 60px;
    padding: 10px;
    background-color: rgb(190, 59, 49);
    text-align: center;
    margin-bottom: 10px;
    font-size : 1.03vw;
    color : #fff;
}



p.year_15::before {
    content: "15";
    font-size: 1.38vw;
    padding: 2px 4px;
    margin: 0 5px;
    background-color: orange;
    border-radius: 100px;
    color: white;
}

p.year_all::before {
    content: "All";
    font-size: 1.38vw;
    padding: 2px 4px;
    margin: 0 5px;
    background-color: green;
    border-radius: 100px;
    color: white;
}

p.year_12::before {
    content: "12";
    font-size: 1.38vw;
    padding: 2px 4px;
    margin: 0 5px;
    background-color: blue;
    border-radius: 100px;
    color: white;
}

p.year_19::before {
    content: "청불";
    font-size: 1.38vw;
    padding: 2px 4px;
    margin: 0 5px;
    background-color: red;
    border-radius: 100px;
    color: white;
}

.title {
    font-size: 1.03vw;
}

.movie-content {
    font-size : 0.83vw;
}

p {
    text-align : left;
}
</style>