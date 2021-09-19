<template>
    <div class="body">
        <main class="display">
            <div class="background">
                <h1>JOIN</h1>
                <p class="small-title">안녕하세요. CGV입니다.</p>
                <form action="#" method="POST" enctype="multipart/form-data">
                <div id="signin">
                    <input id="photo" name="photo" type="file">
                </div>
                <div id="signin">
                    <label class="sign" for="userid">아이디 <span>&centerdot;</span></label><br>
                    <input id="userid" name="userid" type="text" placeholder="아이디"><br>
                </div>
                <div id="signin">
                    <label class="sign" for="password">비밀번호 <span>&centerdot;</span></label><br>
                    <input id="pass1" name="pass" type="password" placeholder="비밀번호"><br>
                    <input id="pass2" type="password" placeholder="비밀번호 확인">
                </div>
                <div id="signin">
                    <label class="sign" for="name">이름 <span>&centerdot;</span></label><br>
                    <input id="name" name="name" type="text" placeholder="이름을(를) 입력하세요.">
                </div>
                <div id="signin">
                    <label class="sign">성별 <span>&centerdot;</span></label><br>
                    <div class="gender">
                        <input id="man" name="gender" type="radio" value="man">
                        <label for="man">남자</label>
                        <input id="woman" name="gender" type="radio" value="woman">
                        <label for="woman">여자</label>
                    </div>
                </div>
                <div id="signin">
                    <label class="sign" for="phone">연락처 <span>&centerdot;</span></label><br>
                    <input id="phone" type="tel" placeholder="연락처">
                </div>
                <div id="signin">
                    <label class="sign" for="email">이메일 <span>&centerdot;</span></label><br>
                    <input id="email" name="email" type="email" placeholder="이메일">
                </div>
                <div id="signin">
                    <label class="sign" for="address">주소 <span>&centerdot;</span></label><br>
                    <input id="address1" type="text" placeholder="주소"><br>
                    <input id="address2" type="text" placeholder="상세주소">
                </div>
                <div id="signin">
                    <label class="sign" for="birthday">생년월일 <span>&centerdot;</span></label><br>
                    <select id="bir_yy" name="bir_yy">
                        <option>연</option>
                        
                    </select>
                    <select id="bir_mm" name="bir_mm">
                        <option>월</option>
                        
                    </select>
                    <select id="bir_dd" name="bir_dd">
                        <option>일</option>
                        
                    </select>
                </div>
                <div>
                    <input id="agree_terms" name="agree_terms" type="hidden">
                    <input id="user_info_agree" name="user_info_agree" type="hidden">
                    <input id="marketing_sms_agree" name="marketing_sms_agree" type="hidden">
                    <input id="marketing_email_agree" name="marketing_email_agree" type="hidden">
                    <button class="btn-shape-border" type="button" onclick="formValidator()">가입하기</button>
                </div>
                </form>
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
.display {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    padding : 1% 12%;
    
}
.small-title {
    text-align: center;
    margin-bottom: 4%;
    font-size : 1vw;
}
#signin {
    text-align: left;
    margin-top: 3%; 
    margin-left: -13%;
    padding : 2%;
}
#signin input {
    border: 1px solid rgb(190, 59, 49);
    border-radius: 3px;
    margin: -1px 10px;
    width: 100%;
    padding: 10px;
    text-align: left;
    
}
.gender {
    
    display : inline-block;
}
.sign {
    margin-left : 2.5%;
}
label {
    color : black;
}
.btn-shape-border{
    width: 100%;
    border: 1px solid rgb(190, 59, 49);
    padding: 1%;
    background-color: rgb(190, 59, 49);
    text-align: center;
    margin-top: 10px;
    font-size: 1.24vw;
    color: #fff;
    
}
</style>