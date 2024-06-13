const accessKey = "MSHrpn2LzIYoK8otiWoCHhv96SApk0Szj3p6jEZ-spg";

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more-button');

let inputData = "";
let page = 1;

function searchImages(){
    inputData = inputEl.value;
    
}
