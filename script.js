const searchBox = document.querySelector('.form-search');
const submit = document.querySelector('.form-submit');

submit.addEventListener('click', cleanFun);

function cleanFun (){
    searchBox.value = ''
}

const latestArrivals = document.querySelector('.nav-links').firstElementChild;
const dropdown = document.querySelector('.dropdown-content')


console.log(dropdown)

latestArrivals.addEventListener('click', showUnder);

function showUnder(){
    if(dropdown.style.zIndex ==='-1'){
        dropdown.style.zIndex = "3";
        dropdown.style.backgroundColor = "rgba(8,8,8,.6)";
    }else{
        dropdown.style.zIndex = '-1';
        dropdown.style.backgroundColor = 'white';

    }
    
}