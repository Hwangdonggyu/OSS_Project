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
        clothIcon.src = "./image/midwinter.png";
        document.querySelector(".cloth-text1").innerHTML = "얼죽아도 고민하게 만드는 매서운 겨울 날씨!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 패딩, 롱패딩, 두꺼운코트 누빔옷, 털모자, 목도리, 장갑, 두꺼운 기모제품<br><br>히트텍, 내복, 핫팩 등을 이용해서 체온 조절을 잘 해주세요!";
    }
    else if(winter) {
        clothIcon.src = "./image/winter.png";
        document.querySelector(".cloth-text1").innerHTML = "초겨울 날씨로 히트텍과 두꺼운 겉옷을 꺼내야 할 때!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 경량패딩, 조끼패딩, 가죽자켓, 두꺼운 자켓, 히트텍, 코트,<br> 무스탕, 두꺼운 니트, 기모바지, 청바지";
    }
    else if(startWinter) {
        clothIcon.src = "./image/startwinter.png";
        document.querySelector(".cloth-text1").innerHTML = "트렌치코트가 어울리는 날씨!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 항공점퍼, 트렌치코트, 야상, 두꺼운 가디건, 점퍼, 재킷, 니트,<br>긴바지, 청바지, 면바지, 기모바지, 스타킹";
    }
    else if(fall) {
        clothIcon.src = "./image/fall.png";
        document.querySelector(".cloth-text1").innerHTML = "온도차가 큰 환절기!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 바람막이, 간절기야상, 얇은 코트, 간절기 외투, 재킷, 두꺼운 가디건,<br>자켓, 청자켓, 니트, 후드티, 맨투맨, 청바지, 면바지, 치마, 얇은 스타킹<br><br>얇은 옷을 여러 겹 겹쳐 입는 것을 추천합니다!";
    }
    else if(startFall) {
        clothIcon.src = "./image/startfall.png"
        document.querySelector(".cloth-text1").innerHTML = "활동하기 좋은 봄가을의 날씨!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 얇은 자켓, 얇은 가디건, 바람막이, 후드티, 셔츠, 얇은 니트,<br>맨투맨, 긴팔티, 긴바지, 면바지, 청바지, 슬랙스, 원피스<br><br>일교차가 커서 얇은 외투를 챙기는 것이 좋습니다!";
    }
    else if(startSummer) {
        clothIcon.src = "./image/startsummer.png";
        document.querySelector(".cloth-text1").innerHTML = "점점 더워지는 늦봄 날씨!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 얇은 셔츠, 얇은 가디건, 블라우스, 긴팔티, 청바지, 슬랙스, 원피스";
    }
    else if(summer) {
        clothIcon.src = "./image/summer.png";
        document.querySelector(".cloth-text1").innerHTML = "본격적인 여름 더위의 시작!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 반팔티, 반팔 셔츠, 반팔 니트, 반바지, 얇은 긴바지";
    }
    else if(midSummer) {
        clothIcon.src = "./image/midsummer.png";
        document.querySelector(".cloth-text1").innerHTML = "지금은 한여름! 무더위가 기승, 불쾌지수 폭등!";
        document.querySelector(".cloth-text2").innerHTML = "추천 옷차림: 민소매, 반팔티, 크롭티, 반바지, 치마, 린넨, 민소매 원피스, 마 소재 옷<br><br>외출 시 자외선 차단제를 바르는 것을 잊지 마세요!<br>실내에서는 에어컨을 강하게 틀 수 있으니 얇은 아우터를 챙기는 것도 좋습니다!";
    }
}