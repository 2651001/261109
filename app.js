// app.js: 영화 배열을 다루는 함수 6개 / 방준태 / 10주차

// average(list) | 영화 배열 ➔ 평균 평점(숫자)
function average(list) {
  let sum = 0;
  for (const m of list) {
    sum += m.rating;
  }
  return sum / list.length;
}

// best(list) | 영화 배열 ➔ 평점이 가장 높은 영화 객체
function best(list) {
  let top = list[0];
  for (const m of list) {
    if (m.rating > top.rating) {
      top = m;
    }
  }
  return top;
}

// filterByRating(list, min) | 영화 배열, 최소 평점 ➔ 그 이상인 영화만 담은 새 배열
function filterByRating(list, min) {
  return list.filter(m => m.rating >= min);
}

// sortByRating(list) | 영화 배열 ➔ 평점 높은 순으로 정렬한 새 배열(원본은 그대로)
function sortByRating(list) {
  return [...list].sort((a, b) => b.rating - a.rating);
}

// yearsSince(dateStr) | 날짜 문자열 ➔ 올해까지 몇 년(숫자)
function yearsSince(dateStr) {
  return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

// posterUrl(path, size) | 포스터 경로, 크기 ➔ TMDB 이미지 주소(문자열)
function posterUrl(path, size) {
  return "https://image.tmdb.org/t/p/" + size + path;
}

// -----------------------------------------------------------------------------
// 콘솔 출력 검사
// -----------------------------------------------------------------------------
console.log("평균:", average(movies));
console.log("최고:", best(movies).title);
console.log("8점 이상:", filterByRating(movies, 8).length + "편");

const sorted = sortByRating(movies);
console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title);
console.log(yearsSince(movies[0].date) + "년 전 개봉");
console.log(posterUrl(movies[0].poster, "w342"));

// -----------------------------------------------------------------------------
// 브라우저 객체 모델(BOM) 및 화면 렌더링
// -----------------------------------------------------------------------------
document.title = "내 영화 " + movies.length + "편";
console.table(sortByRating(movies));

// 배너 상단에 한 줄 출력
document.getElementById("out").textContent = "평균 " + average(movies).toFixed(1) + "점, 최고 " + best(movies).title;

// 화면 그리드에 5개 영화 카드 동적 렌더링
function renderBoard(list) {
  const container = document.getElementById("movie-grid");
  if (!container) return;

  container.innerHTML = list.map(m => `
    <div class="movie-card">
      <div class="poster-box">
        <span class="rating-badge">${m.rating.toFixed(2)}</span>
        <img src="${posterUrl(m.poster, 'w500')}" alt="${m.title}" onerror="this.src='https://via.placeholder.com/500x750?text=No+Image'">
      </div>
      <div class="movie-info">
        <div class="movie-title">${m.title}</div>
        <div class="movie-year">${m.year}</div>
        <div class="movie-desc">개봉일: ${m.date}</div>
      </div>
    </div>
  `).join("");
}

renderBoard(movies);