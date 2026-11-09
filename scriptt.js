// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 전동찬(2651060)
const titles = ["미션 파서블", "미션 임파서블", "미션", "미션 임파서블: 로그네이션", "미션 임파서블: 파이널 레코닝"];
const ratings = [7.40, 7.03, 7.41, 7.20, 7.16];
const years = [2021, 1996, 1986, 2015, 2025];

//즉시실행 함수 만들기
(function init(){
    console.log("나는 함수다. 실행이 되었다")
}) ();
//화살표함수로 함수 정의 하기
const gugudan=  dan => {
    for(let i=1; i<=9; i++){
        console.log(`${dan} x ${i} = ${dan*i}`);
    }
}

gugudan(7);

const add = (num1, num2) => num1 + num2;

console.log(add(1234,5678));
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
 sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);
let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (i = 0; i < ratings.length; i++){
    if (ratings[i] >= 8) {
        count++;
    }
        
    if (ratings[i] > max){
        max = ratings[i];
        maxIndex = i;
    }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");
let label;
for(i = 0; i < 5; i++){
    if(ratings[i] >= 8.5){
        label = "명작";
    }else if(ratings[i] >= 7){
        label = "추천";
    }else{
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);


