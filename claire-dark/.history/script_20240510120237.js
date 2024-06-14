// TODO : variable
const toogleBtn = document.getElementById('toggle-btn');
const body = document.querySelector('body');
const mainImg = document.getElementById('mainImg');
const text = document.getElementById('text');

// TODO : variable
let darkMode = localStorage.getItem('dark-mode');
// console.log(darkMode);  //! null

// TODO : traitement
const enableDarkMode = () =>{
    body.classList.add('dark-mode-toggle');
    toogleBtn.classList.add('dark-mode-toggle');
    mainImg.classList.add('dark-mode-main-image');
    text.innerHTML = 'sombre';
    localStorage.setItem('dark-mode','enabled');
}
const disableDarkMode = () =>{
    body.classList.remove('dark-mode-toggle');
    toogleBtn.classList.remove('dark-mode-toggle');
    mainImg.classList.remove('dark-mode-main-image');
    text.innerHTML = 'claire';
    localStorage.setItem('dark-mode','disabled');
}

// TODO : main
toggleBtn.onclick = function() {
    darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled)
}


// TODO : display on the console
console.log(toogleBtn);
console.log(body);
console.log(mainImg);
console.log(text);

