const titles = ["스파이더맨: 브랜드 뉴 데이", "스파이더맨: 홈커밍", "어메이징 스파이더맨", "스파이더맨: 뉴 유니버스", "스파이더맨: 노 웨이 홈"];
const ratings = [8.4, 7.3, 6.7, 8.4, 7.9];
const years = [2026, 2017, 2012, 2018, 2021];

//즉시 실행 함수 만들기
(function init(){
    console.log("나는 함수다. 실행이 되었다.");
})();
//선언문으로 함수 정의하기
const gugudan = function(dan){
    for(let i=1;i<=9;i++){
        console.log(`${dan} x ${i} = ${dan*i}`);
    }
}

gugudan(7);

const add = function(num1, num2){
    return num1 + num2;
}
console.log(add(1234,5678));

//화살표함수로 함수 정의하기
const gugudan1 = dan => {
    for(let i=1;i<=9;i++){
        console.log(`${dan} x ${i} = ${dan*i}`);
    }
}

gugudan(7);

const add1 = (num1, num2) => num1 + num2;
console.log(add1(1234,5678));



let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const avg = sum / ratings.length; 
const avgText = avg.toFixed(1);   
console.log("평균:", avgText);

let max = 0;
for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[max]) {
        max = i;
    }
}
const best = titles[max];
console.log("최고:", best, ratings[max]);

let over8 = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        over8++;
    }   
}
console.log("8점 이상:", over8 + "편");

for (let i = 0; i < titles.length; i++) {
    let tag = "";
    if (ratings[i] >= 9) {
        tag = "명작";
    } else if (ratings[i] >= 7) {
        tag = "추천";
    } else {
        tag = "보통";
    }
    console.log(`${titles[i]} (${years[i]}) : ${ratings[i]} ${tag}`);
}

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

// // document.write("외부 스크립트 방법");

// console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다");

// let dan = 3;

// console.log("**엄청나다 구구단 3단**");
// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} X ${i} = ${dan * i}`);
// }

// if (dan === '3') {
//     console.log("3단이 맞습니다.");
// } else {
//     console.log("틀렸습니다.");
// }

// // 띄어쓰기 수정 완료 (let arr)
// let arr = [80, 70, "메롱", 90, 60];
// console.log(arr);
// console.log(arr[2]);

// let stdScore = {
//     korean: 80,
//     english: 70,
//     math: 90,
//     science: 60
// };
// console.log(stdScore);
// console.log(stdScore.math);
// stdScore.name = "김성수";
// console.log(stdScore);