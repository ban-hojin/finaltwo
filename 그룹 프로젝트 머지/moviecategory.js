// 0. 인기영화, 추천영화, 최신영화 쿼리 확인 (https://developer.themoviedb.org/reference/)
// 0.1.1 인기영화, 추천영화, 최신영화, 상영예정작은 URL주소 엔드값
// 0.1.2 인기영화 (https://api.themoviedb.org/3/movie/popular)
// 0.1.2 추천영화 (https://api.themoviedb.org/3/movie/top_rated)
// 0.1.3 최신영화 (https://api.themoviedb.org/3/movie/now_playing)
// 0.1.4 상영예정 (https://api.themoviedb.org/3/movie/upcoming)
// 유사 코드 : 선옥님 검색어 호출 및 보여주기, 수영님 최신영화 호출 및 보여주기
// 선옥님 코드 본 후 수정 사항 : options 추가  
// (문제발생) 주소값에 id를 붙이고 menus에 class로 지정하면 상위 class 값 menu-line과 충돌 

// HTML 적용 코드 
// <div class = "menus">  
// <button id = "popular">인기영화</button> 
// <button id = "top_rated">추천영화</button> 
// <button id = "now_playing">최신영화</button>
// <button id = "upcoming">상영예정</button> 
// <script src= "moviecategory.js"></script>


const menus = document.querySelectorAll(".menus button");
console.log("mmm", menus);

menus.forEach(menu => menu.addEventListener("click",(event) => getMoviesCategory(event)));

const getMoviesCategory = async (event) => {
    const category = event.target.id;
    console.log("category", category);
    let url;
    if (category === 'popular' || category === 'top_rated' || category === 'now_playing') {
        url = new URL(`https://api.themoviedb.org/3/movie/${category}`);
        url.searchParams.append('language', 'ko-KR');
    } else {
        console.error('Invalid category');
        return;
    }

    try {
        const response = await fetch(url,options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("category", data);
        movieList = data.results;
        render();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
