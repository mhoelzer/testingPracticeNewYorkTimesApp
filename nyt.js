const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = '820acff1756345ed8c02711ba87f782c'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

//1
function fetchResults(e) {
  console.log(e); //2
  // Assemble the full URL
  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
  console.log(url); //4
}

function nextPage(){
  console.log("Next button clicked");
} //5

function previousPage(){
  console.log("Next button clicked");
} //5