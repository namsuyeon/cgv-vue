<template>
  <div class="header">
    <div class="user_info">
        <router-link to="/login">로그인&nbsp;|&nbsp;</router-link>
        <router-link to="/join_agree">회원가입</router-link>
    </div>  
    <div class="clear">
        <div id="menu">
            <ul class="main1">
                <li><router-link to="/movie">Movie</router-link></li>
                <li><router-link to="/reserve">Reserve</router-link></li>
            </ul>
        </div>
        <router-view/>
    </div>
  </div>
</template>

<style>
@font-face {
    font-family: '210 Manbalchungchun L';
    src: url('./font/TTManbalchungchunL.woff2') format('woff2'),
        url('./font/TTManbalchungchunL.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: '210 Manbalchungchun B';
    src: url('./font/TTManbalchungchunB.woff2') format('woff2'),
        url('./font/TTManbalchungchunB.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

* {
  text-align: center;
  color: rgb(190, 59, 49);
  list-style-type: none;
  text-decoration: none;
  font-family: '210 Manbalchungchun L','210 Manbalchungchun B';
}

.body {
        background-image: url('./assets/back2-1.jpg');
        /* background-repeat: no-repeat; */
        background-size: cover;
        background-attachment: fixed;
}

.header {
  background-color: rgb(190, 59, 49,0.2);
  color: #fff;
}

h1 {
    padding-top: 1.7%;
    margin-top: 2%;
    text-align: center;
    font-size: 3.45vw;
    color : rgb(190, 59, 49);
   
}
.user_info {
  float: right;
  padding-top: 10px;
  font-size : 0.83vw;
    }

.clear {
    clear: left;
}

#menu {
    height: 50px;
}

.main1 {
    width: 50%;
    height: 100%;
    margin-left : 35%;
    list-style-type: none;
    font-size: 17px;
    
}

.main1>li {
    float: left;
    width: 25%;
    line-height: 50px;
    text-align: center;
    position: relative;
}

.main1>li:hover {
    left: 0;
}

.main1>li a {
    display: block;
}

.main1>li a:hover {
    background: rgba(255, 255, 255, 0);
    color: red;
    font-weight: bold;
    text-decoration: underline;
}

.display-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row; 
    width: 100%;
    padding : 1% 0%;
    
}
.background-footer {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    width: 35%;
    padding: 1% 1%;
    
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255, 0);
    border-radius: 2ex;
    overflow: hidden;
}
.contact {
    text-align: left;
    font-size : 0.9vw;
    text-align: left;
}
</style>
