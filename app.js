const searchIcon = document.querySelector(".fa-magnifying-glass");
const searchInput = document.querySelector(".search input");

// Hide input when page loads
searchInput.style.display = "none";

searchIcon.addEventListener("click", () => {
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
        searchInput.focus();
    } else {
        searchInput.style.display = "none";
    }
});