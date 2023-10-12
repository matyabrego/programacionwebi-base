const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#submit");
const deleteBtn = document.querySelector("#delete");
let recentSearches;

const checkRecentSearches = () => {
  if (localStorage.recentSearches && localStorage.recentSearches != "") {
    recentSearches = JSON.parse(localStorage.recentSearches);
  } else {
    recentSearches = [];
  }
};

const searchAlbums = (event) => {
  event.preventDefault();

  if (searchInput.value != "") {
    recentSearches.push(searchInput.value);
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  } else {
    console.log("Ingresar valores...");
  }
};

const getInputValue = (event) => {
  console.log("Arrow function", searchInput.value);
};

const deleteRecentSearches = (event) => {
  event.preventDefault();

  localStorage.removeItem("recentSearches");
};

searchBtn.addEventListener("click", searchAlbums);
deleteBtn.addEventListener("click", deleteRecentSearches);
// searchInput.addEventListener("keyup", getInputValue);

checkRecentSearches();
