const clothIcon = document.querySelector(".cloth-icon");


function todayClothes(data) {
    let todayTemp = data.main.temp;

    let midWinter = todayTemp <= 4;
    let winter = todayTemp >= 5 && todayTemp < 9;
    let startWinter = todayTemp >= 9 && todayTemp < 12;
    let fall = todayTemp >= 12 && todayTemp < 17;
    let startFall= todayTemp >= 17 && todayTemp < 20;
    let startSummer = todayTemp >= 20 && todayTemp < 23;
    let summer = todayTemp >= 23 && todayTemp < 28;
    let midSummer = todayTemp >= 28;

    if(midWinter) {
        clothIcon.src = ".";
    }
    else if(winter) {
        clothIcon.src = ".";
    }
    else if(startWinter) {
        clothIcon.src = ".";
    }
    else if(fall) {
        clothIcon.src = ".";
    }
    else if(startFall) {
        clothIcon.src = "./image/earlyWinter.png"
    }
    else if(startSummer) {
        clothIcon.src = ".";
    }
    else if(summer) {
        clothIcon.src = ".";
    }
    else if(midSummer) {
        clothIcon.src = ".";
    }

}