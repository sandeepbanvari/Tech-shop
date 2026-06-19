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

const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", () => {
    window.location.href = "signin.html";
});


const productType = document.getElementById("productType");

document.querySelector(".left").addEventListener("click", () => {
    productType.scrollLeft -= 150;
});

document.querySelector(".right").addEventListener("click", () => {
    productType.scrollLeft += 150;
});