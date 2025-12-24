const arr = [3,88,76,9,34,65];

const result = arr.reduce((prev, current) => {
    //prev는 이전에 return한 값
    //current는 현재값

    //최초만 0번방이 prev 파라미터로 들어오고, 1번방이 current 파라미터로 들어옴.
    //두 번째 돌 때는 prev 파라미터로 91(이전에 리턴한 값)이 들어오고, 2번 방이 current 파라미터로 들어옴.
    //이 규칙이 반복되어서 최종 하나의 값이 result의 결과값.
    return prev + current
})

const result2 = arr.reduce((prev, current) => {
    return prev + current;
}, 0); //두 번째 argumet(0)는 최초 prev 값으로 쓰임.