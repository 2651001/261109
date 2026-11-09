// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 전동찬(2651060)
const titles = ["미션 파서블", "미션 임파서블", "미션", "미션 임파서블: 로그네이션", "미션 임파서블: 파이널 레코닝"];
const ratings = [7.40, 7.03, 7.40, 7.20, 7.16];
const years = [2021, 1996, 1986, 2015, 2025];
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


//document.write("외부 스크립트 방법");

//console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다");
//console.log("**엄청 나다 구구단 풀단!**");
//for (let i = 1; i <= 9; i++) {
    //for (let j = 1; j <= 9; j++) {
      //  console.log(`${i} x ${j} = ${i * j}`)
        
    //}
    //if (i === 3) {
          //  console.log(`3단이 맞다`);
        //} else {
      //      console.log(`3단이 아닌 무언가다`);
    //    }
  //  console.log(` `)
//}

//let arr = [80, 70,' I puck you', 60, 90];
//console.log(arr);
//console.log(arr[2]);

//let stdScore = {
  //  korean : 80, engilsh : 70, math : 60, science : 90
//};
//console.log(stdScore);
//console.log(stdScore.math);
//stdScore.name = "홍길동";
//console.log(stdScore.name);