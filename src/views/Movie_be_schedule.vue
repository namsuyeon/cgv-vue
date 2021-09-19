<template>
    <div class="body">
        <main class="display-movie">                
            <section class="background">
                <div class="movie-slide">
                    <ul>
                        <li><a href="#"><img src="../assets/movie-Inzil.jpg" width="110%"></a></li>
                        <li><a href="#"><img src="../assets/movie-Sence.jpg" width="110%"></a></li>
                        <li><a href="#"><img src="../assets/movie-Squad.jpg" width="110%"></a></li>
                    </ul> 
                </div>
            
                <!--상영 예정작들-->
                <p class="btn-shape-moviechart">상영 예정작</p>
                <div id="movie-container">
                    <ul class="movie-list-top5">
                        <li>
                            <a href="#"><img src="../assets/104.jpg" width="200px"></a>
                            <div>
                                <p class="title year_19">더 수어사이드 스쿼드</p>
                                <p class="movie-content">예매율 18.3%&nbsp;|&nbsp;개봉일 2021.08.04</p>
                            </div>
                            <div class="margin-top">
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
                            <div class="margin-top">
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
                            <div class="margin-top">
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
                            <div class="margin-top">                                            
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
                            <div class="margin-top">
                                <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                <a class="btn-shape-button" href="detail-movie10.html">상세보기</a>
                            </div>  
                        </li>
                        <li>
                            <a href="#"><img src="../assets/118.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_12">싱크홀</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-7</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/119.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_12">프리 가이</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-7</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/120.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_all">로빈의 소원</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-7</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/121.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_12">생각의 여름</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-8</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/122.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_15">암살자들</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-8</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/123.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_15">인질</p>
                                <p class="movie-content">예매율 2.4%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-14</p>
                            </div>
                            <div class="margin-top">
                                <router-link to="/reserve" class="btn-shape-button">예매하기</router-link>
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/124.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_15">귀문</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-14</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/125.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_12">올드</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-14</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/117.jpg" width="200px"></a> 
                            <div>
                                <p class="title year_15">팜 스프링스</p>
                                <p class="movie-content">예매율 0.0%&nbsp;&nbsp;|&nbsp;&nbsp;개봉일 D-15</p>
                            </div>
                            <div class="margin-top">
                                <a class="btn-shape-button" href="#">상세보기</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>    
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
.btn-shape-moviechart {
    margin: 0px auto;
    width: 90%;
    padding: 5px;
    background-color: #fff;
    border-bottom: 2px solid #222;
    text-align: left;
    margin-bottom: 10px;
    font-size: 1.38vw;
}
#movie-container ul {list-style-type: none;}
#movie-container li {
    display: inline-block;
    width: 200px;
    position: relative;
    overflow: hidden;
    margin: 5px;
}
.margin-top {
    margin-top: 10px;
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
</style>