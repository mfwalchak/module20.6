//import "./index.css";

//hooking into HTML button and search forms
const searchBtn = document.getElementById("searchBtn");
const searchForm = document.getElementById("searchTerm");
let errorDiv = document.createElement("div")

//check if form is blank
function validateExists(value) {
    return value && value.trim();
}

//on click if form is blank add the following error message:
// function validateSearch(searchForm) {
//     searchError = document.querySelector("#searchError");
//     if (!validateExists(searchForm)) {
//         searchError.classList.remove("hidden");
//         console.log(searchError); 
//         // document.getElementById("searchError").className = 
//         // document.getElementById("searchError").className.replace( /(?:^|\s)hidden(?!\S)/g , '' )    
//     }
//     }
//on click convert search input value to lower case and iterate through article TITLES only
function searchHandler(searchValue) {
    let resultIncludes = "";
    const searchTerm = searchValue.toLowerCase();
    console.log(searchTerm);
    const searchResults = document.querySelectorAll("h2");
    for (let result of searchResults){
        resultIncludes = result.innerText.toLowerCase().includes(searchTerm);
        console.log(resultIncludes);
        if (!resultIncludes) {
            result.classList.add("hidden");
        }//need to actually add hidden to article elements this only hides H2
    }
    // return searchResults;
}

const main = () => {

    //add event listenr to the search button
    searchBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        const searchValue = searchForm.value;
        //validateSearch(searchValue);
        searchHandler(searchValue);
        }) 

      //on click perform the search, case insensitive, of article titles
//titles are the innerHTML of h2 elements
//term matches ANY PART of the article display article
//nothing in the article matches search term article is hidden
//add class "hidden" to article to make hidden
//remove class "hidden" from article to make visible

//if another search is conducted previously hidden articles should be visible again
    };


  window.addEventListener("DOMContentLoaded", main);