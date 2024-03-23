const apiKey = "OD3wGJ-WhSyEd7wZMpMe8JdDHXIvIj8Y5oNw693ZGqw";
const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox');
const searchResult = document.getElementById('searchResult');
const showMoreBtn = document.getElementById('showMoreBtn');



let page = 1;
let keyword = "";


searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    fetchData();
})


async function fetchData(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

    const resp = await fetch(url);
    const data = await resp.json();

    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = '';
    }

    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        
        searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = 'block';

    console.log(data);

}

showMoreBtn.addEventListener('click',()=>{
    page++;
    fetchData();
})




// fetch("").then(async(resp)=>{
//     const data = await resp.json();
// })