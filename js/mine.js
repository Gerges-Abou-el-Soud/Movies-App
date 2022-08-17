// sidebar start
$(".openNav").click(function () {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#sidebar-content").animate({ marginLeft: '250px' }, 50)
})

$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#sidebar-content").animate({ marginLeft: '0px' }, 50)
})
//  sidebar end 
//  start API


const API_KEY = 'api_key=9f76628a17bb84c89985be39b0478bd6';
const BASE_URL = 'https://api.themoviedb.org/3';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY ;

const main = document.getElementById('main');

const form = document.getElementById('form');
const search = document.getElementById('search');

const formGet = document.getElementById('formGet');
const getMovie = document.getElementById('getMovie');



getData('now_playing')
function getData(category){
    const API_URL = BASE_URL + '/movie/' + category +'?'+ API_KEY;
getMovies(API_URL);
}


function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
};

var links = document.getElementsByClassName("nav-links");
for(var i=0 ; i < links.length ; i++){
    links[i].addEventListener("click" , function(eventInfo){
        getData(eventInfo.target.attributes.id.nodeValue);
    });
};


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, release_date } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie', 'poster', 'col-xl-4', 'col-lg-6', 'pb-4')
        movieEl.innerHTML = `
        
        <div class="posterImage position-relative overflow-hidden w-100 h-100 ">

            <img src="${IMG_URL + poster_path}" class="postert-img w-100 " alt="${title}">

            <div class="info-poster w-100 h-100 pb-5 position-absolute top-50 opacity-0 text-center p-4">
                <h2 id="movTitle">${title}</h2>

                <p id="description">${overview}</p>

                <span id="rate">rate: ${vote_average}</span>

                <span id="productionDate">${release_date}</span>
            </div>
        `
        main.appendChild(movieEl);
    })
};

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(searchURL + '&query=' + searchTerm)
    }else{
        getMovies(API_URL);
    }
} );


formGet.addEventListener('submit', (e) =>{
    e.preventDefault();

    const searchTerm = getMovie.value;

    if(searchTerm){
        getMovies(searchURL + '&query=' + searchTerm)
    }else{
        getMovies(API_URL);
    }
} );


//footer

var nameEL = document.getElementById('name');
var namealert = document.getElementById('namealert');
var RegexName = /^[A-Z][a-zA-Z]{3,6}$/;

function validateProductName()
{
    if(RegexName.test(nameEL.value) == false)
    {
        namealert.classList.remove("d-none");
        namealert.classList.add("d-block");
        return false;
    }
    else{
        namealert.classList.add("d-none");
        namealert.classList.remove("d-block");
        return true;
    }
}
nameEL.addEventListener("keyup" , validateProductName);



var emailEL = document.getElementById('email');
var emailalert = document.getElementById('emailalert');
var RegexEmail = /^[a-zA-Z]{1,}(@)[a-zA-Z]{1,}(\.com)/;

function validateProductEmail()
{
    if(RegexEmail.test(emailEL.value) == false)
    {
        emailalert.classList.remove("d-none");
        emailalert.classList.add("d-block");
        return false;
    }
    else{
        emailalert.classList.add("d-none");
        emailalert.classList.remove("d-block");
        return true;
    }
}
emailEL.addEventListener("keyup" , validateProductEmail);





var phoneEL = document.getElementById('phone');
var phonealert = document.getElementById('phonealert');
var RegexPhone = /^01[0125][0-9]{8}$/

function validateProductPhone()
{
    if(RegexPhone.test(phoneEL.value) == false)
    {
        phonealert.classList.remove("d-none");
        phonealert.classList.add("d-block");
        return false;
    }
    else{
        phonealert.classList.add("d-none");
        phonealert.classList.remove("d-block");
        return true;
    }
}
phoneEL.addEventListener("keyup" , validateProductPhone);


var passwordEL = document.getElementById('password');
var passwordalert = document.getElementById('passwordalert');
var RegexPassword = /^[a-zA-Z][0-9]{8}/;

function validateProductPassword()
{
    if(RegexPassword.test(passwordEL.value) == false)
    {
        passwordalert.classList.remove("d-none");
        passwordalert.classList.add("d-block");
        return false;
    }
    else{
        passwordalert.classList.add("d-none");
        passwordalert.classList.remove("d-block");
        return true;
    }
}
passwordEL.addEventListener("keyup" , validateProductPassword);




var repasswordEL = document.getElementById('rePassword');
var repasswordalert = document.getElementById('repasswordalert');
var RegexRepassword = /^[a-zA-Z][0-9]{8}/;

function validateProductRepassword()
{
    if(RegexRepassword.test(repasswordEL.value) == false)
    {
        repasswordalert.classList.remove("d-none");
        repasswordalert.classList.add("d-block");
        return false;
    }
    else{
        repasswordalert.classList.add("d-none");
        repasswordalert.classList.remove("d-block");
        return true;
    }
}
repasswordEL.addEventListener("keyup" , validateProductRepassword);
