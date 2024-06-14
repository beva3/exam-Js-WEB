// TODO : variable
const toggleBtn = document.getElementById('toggle-btn');
const body = document.querySelector('body');
const mainImg = document.getElementById('mainImg');
const text = document.getElementById('text');

// TODO : variable
let darkMode = localStorage.getItem('dark-mode');
// console.log(darkMode);  //! null

// TODO : traitement
const enableDarkMode = () =>{
    body.classList.add('dark-mode-theme');
    toggleBtn.classList.add('dark-mode-toggle');
    mainImg.classList.add('dark-mode-main-img');
    text.innerHTML = 'sombre';
    localStorage.setItem('dark-mode','enabled');
}
const disableDarkMode = () =>{
    body.classList.remove('dark-mode-theme');
    toggleBtn.classList.remove('dark-mode-toggle');
    mainImg.classList.remove('dark-mode-main-img');
    text.innerHTML = 'claire';
    localStorage.setItem('dark-mode','disabled');
}

// ! 
if (darkMode === 'enabled'){
    da
}

// TODO : main
toggleBtn.onclick = function() {
    darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}


// TODO : display on the console
console.log(toggleBtn);
console.log(body);
console.log(mainImg);
console.log(text);

