const clothIcon = document.querySelector(".cloth-icon");
const check_m_g = document.querySelector("#check_m_g"); //성별 선택

function todayClothes(data) {
    let todayTemp = data.main.temp;

    let winter = todayTemp <= 4;
    let earlyWinter = todayTemp >= 5 && todayTemp < 9;
    let beginWinter = todayTemp >= 9 && todayTemp < 12;
    let fall = todayTemp >= 12 && todayTemp < 17;
    let earlyFall = todayTemp >= 17 && todayTemp < 20;
    let earlySummer = todayTemp >= 20 && todayTemp < 23;
    let beginSummer = todayTemp >= 23 && todayTemp < 28;
    let summer = todayTemp >= 28;

    if(winter) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }
    else if(earlyWinter) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }
    else if(beginWinter) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }
    else if(fall) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }
    else if(earlyFall) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = "./image/earlyWinter.png"
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = "./image/earlyWinter.png"
        }
    }
    else if(earlySummer) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }
    else if(beginSummer) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }
    else if(summer) {
        if(check_m_g.value === "man"){ //남자 옷
            clothIcon.src = ".";
        }
        else if(check_m_g.value === "girl"){ // 여자 옷
            clothIcon.src = ".";
        }
    }

}