const clothIcon = document.querySelector(".cloth-icon");

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
        clothIcon.src = ".";
    }
    else if(earlyWinter) {
        clothIcon.src = "";
    }
    else if(beginWinter) {
        clothIcon.src = ""
    }
    else if(fall) {
        clothIcon.src = ""
    }
    else if(earlyFall) {
        clothIcon.src = "./image/earlyWinter.png"
    }
    else if(earlySummer) {
        clothIcon.src = ""
    }
    else if(beginSummer) {
        clothIcon.src = ""
    }
    else if(summer) {
        clothIcon.src = ""
    }

}