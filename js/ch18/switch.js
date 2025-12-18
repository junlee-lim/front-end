// switch(숫자값) {

//     case 1: //:(콜론)과 break; 키워드 사이의 코드 실행
//     break;
    
//     case2: // 숫자값이 2였을 때 실행하고 싶은 코드 작성
//     break;
    
//     default: //if문의 else랑 같음
//     break;

//     }

const mon = parseInt(Math.random()*12.0 + 1)

switch(mon) {
    case 1:
    case 2:
    case 12: console.log('겨울');
        break;

    case 3:
    case 4:
    case 5: console.log('봄');
        break;

    case 6:
    case 7:
    case 8: console.log('여름');
        break;

    case 9:
    case 10:
    case 11: console.log('가을');
        break;
}

console.log(mon);