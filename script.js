const searchContainer = document.getElementById("searchContainer");
const searchBar = document.getElementById("search-bar");
const toggleBtn = document.querySelector('.toggle_btn');
const linksContainer = document.querySelector('.navbar .links');

searchBar.addEventListener("focus", function () {
    searchContainer.style.width = "300px";
});

searchBar.addEventListener("blur", function () {
    if (this.value === "" && !linksContainer.classList.contains('show')) {
        searchContainer.style.width = "200px";
    }
});

toggleBtn.addEventListener('click', function() {
    linksContainer.classList.toggle('show');
});


