const accessKey = "MSHrpn2LzIYoK8otiWoCHhv96SApk0Szj3p6jEZ-spg";

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more-button');

let inputData = "";
let page = 1;

async function searchImages(){
    //! what is async
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url); //! do ?
    const data = await response.json(); //! do ?

    const results = data.results;

    if(page ===1){
        searchResults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");//!wrapp
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
    page++;
    if(page >1){
        showMore.style.display = "block";
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    page =1;
    searchImages();
});

showMore.addEventListener('click', () => {
    searchImages();
});