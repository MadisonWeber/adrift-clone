const searchBox = document.querySelector('.form-search');
const submit = document.querySelector('.form-submit');

submit.addEventListener('click', cleanFun);

function cleanFun (){
    searchBox.value = ''
}

const latestArrivals = document.querySelector('.nav-links').firstElementChild;
const dropdown = document.querySelector('.dropdown-content')



latestArrivals.addEventListener('click', showUnder);

function showUnder(){
    if(dropdown.style.zIndex ==='-1'){
        dropdown.style.zIndex = "3";
        dropdown.style.backgroundColor = "rgba(8,8,8,.6)";
        categories.style.zIndex = '-2';
    }else{
        dropdown.style.zIndex = '-1';
        dropdown.style.backgroundColor = 'white';

    }
    
}

const catButton = document.getElementById('cat');
const categories = document.querySelector(".dropdown-brands");

console.log(categories)

catButton.addEventListener('click', showUnder2);

function showUnder2 (){
    if(categories.style.zIndex === '-2'){
        categories.style.zIndex = '3';
        categories.style.backgroundColor = "rgba(8,8,8,.6)";
        dropdown.style.zIndex = '-1';

    }else{
        categories.style.zIndex = '-2';
        categories.style.backgroundColor= 'white';
    }
}