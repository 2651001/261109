// app.js : 영화 배열을 다루는 함수 6개 / 김성수(2651010) / 10주차

// 영화 배열 ⇒ 평균 평점(숫자)
const average = list => {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return Number((sum / list.length).toFixed(2));
}
console.log("평균:", average(movies));

// 영화 배열 ⇒ 평점이 가장 높은 영화 객체
const best = list => {
    if (!list || list.length === 0) return null;
    let highest = list[0];
    for (const m of list) {
        if (m.rating > highest.rating) {
            highest = m;
        }
    }
    return highest;
}
console.log("최고:", best(movies).title);

// 영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
const filterByRating = (list, min) => {
    const result = [];
    for (const m of list) {
        if (m.rating >= min) {
            result.push(m);
        }
    }
    return result;
}
console.log("8점 이상:", filterByRating(movies, 8).length + "편");

// 영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열(원본은 그대로)
const sortByRating = list => {
    return [...list].sort((a, b) => b.rating - a.rating);
}
const sorted = sortByRating(movies);
console.log(`정렬 1위: ${sorted[0].title} / 원본 1번: ${movies[0].title}`);

// 날짜 문자열 ⇒ 올해까지 몇 년(숫자)
const yearsSince = dateStr => {
    const currentYear = new Date().getFullYear();
    const releaseYear = new Date(dateStr).getFullYear();
    return currentYear - releaseYear;
}
console.log(yearsSince("2012-06-28") + "년 전 개봉");


// 포스터 경로, 크기 ⇒ TMDB 이미지 주소(문자열)
const posterUrl = (path, size) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
}
console.log(posterUrl("/mt6uZzy7DAsncHlGGzMsyNgLR6v.jpg", "w342"));
console.table(sorted);