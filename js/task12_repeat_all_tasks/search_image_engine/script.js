// 6gNIOjZfgQbYVpxxd4Ou8m7k0yynEZz1diY3xKl2D9Q
const apiKey = "pQO809IINAOJKYnZ0kNkhNrvfJBnFp94c4vyyysm0VQ";

let searchInp = document.querySelector('.searchInput');
let searchBtn = document.querySelector('.searchBtn');
let searchResult = document.querySelector('.searchResult');
let nextBtn = document.querySelector('.nextBtn');

searchBtn.addEventListener('click', fetchImages);

let perPage = 12;
let page = 1;
let query ='';

// feth data from api
async function fetchImages(){
    try {
        query = searchInp.value;
        console.log(query);
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}&per_page=${perPage}`;

        const resp = await fetch(url);
        const data = await resp.json();

        if (page == 1) {
            searchResult.innerHTML = '';        
        }

        data.results.forEach(el => {
            let img = document.createElement('img');
            img.src = el.urls.small;

            searchResult.appendChild(img);
        });    
        nextBtn.style.display = 'block';  
        
    } catch (error) {
        console.error(error);
    }
}
// show more images
nextBtn.addEventListener('click',()=>{
    page+=1;
    fetchImages();
});
