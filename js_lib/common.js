//두고두고 써먹으려고, 확장자가 js이기 때문에 script 태그는 필요없음.

/*------------------------------------------------------------------
랜덤 정의되어 있음 쓰여있는 값까지 출력 되도록 만들어 놓은 함수
------------------------------------------------------------------*/
function getRandom(max){
    //원하는 정수를 반환받기 위해서는 n의 값을 호출 시 결정하자
    //ex) getRandom(1001)을 넘기면 0~1000반환함
    // 구하려는 값보다 1더 크게 설정하자.
    
    //랜덤을 구하기만 헀음
    //호출 헀을때 어떤 값을 반환할지는 정해져있는게 아니다..
    return parseInt(Math.random()*(max+1));
    // parseInt(Math.random()*5);//4.xxxxxx
}


/*------------------------------------------------------------------
한 자릿수 정수에 대한 처리
------------------------------------------------------------------*/
function zeroString(n){
    //만일 n이 한자릿수 이면, 앞에 '0'이라는 문자를 붙여주자
    let str=n;
    if(n>0 && n<10)str="0"+n;
    return str;
}

/*------------------------------------------------------------------
해당 월의 시작 요일 구하기
API사용 예) 2025년 5월을 원하면 getStartDay(2025,4)로 넘겨라
------------------------------------------------------------------*/
function getStartDay(yy,mm){
    let d = new Date(yy,mm,1);//연, 월 의 1일
    return d.getDay();//해당 요일을 반환.
}


/*------------------------------------------------------------------
한국어로 요일을 변환하여 반환하기.
영어도 준비해 놨습니다~
사용예) convertDay(2, "eng")
------------------------------------------------------------------*/
//몇번째 요일인지, 어떤 언어를 사용할 건지 선택
function convertDay(n, lang){
    let korDayArray=["일요일","월요일","화요일","수요일","목요일","금요일", "토요일"];
    let engDayArray=["SUN","MON","TUE","WED","THU","FRI", "SAT"];
    
    //어떤 요일을 선택할 지 결정
    let day = (lang=="kor")? korDayArray[n]:engDayArray[n];
    return day
    
}


/*------------------------------------------------------------------
해당 월의 마지막 날 구하기 / 28,29,30,31중 며칠까지 존재하는지.
API사용 예) getLastDate(원하는 연도, 원하는 월)
------------------------------------------------------------------*/
function getLastDate(yy, mm){
    let d = new Date(yy,mm+1,0);
    return d.getDate();
}


/*------------------------------------------------------------------
충돌체크함수
API 사용 예) 나, 상대방을 좌표로 그냥 지정해주면됨.
------------------------------------------------------------------*/
function collisionCheck(me, target){
    //나에 대한 수치계산
    //나의 시작 x값
    //나의 시작 y값
    const me_x = parseInt(me.style.left);
    const me_y = parseInt(me.style.top);
    let me_width = parseInt(me.style.width);
    let me_height = parseInt(me.style.height);
    
    const target_x = parseInt(target.style.left);
    const target_y = parseInt(target.style.top);
    let target_width = parseInt(target.style.width);
    let target_height = parseInt(target.style.height);
    
    return !(
        me_x+me_width < target_x ||//me의 오른쪽이 타겟의 왼쪽보다 왼쪽에 있으면,
        me_x>target_x+target_width ||//me의 왼쪽이 타겟의 우측보다 더 오른쪽이면,
        me_y+me_height < target_y ||//me의 아래쪽이 타겟의 왼쪽보다 왼쪽에 있으면,
        me_y>target_y+target_height//me의 위쪽이 타겟의 우측보다 더 오른쪽이면,
    )
}





















