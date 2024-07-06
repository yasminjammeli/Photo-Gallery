// Select all filterable cards and buttons
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const filterButtons = document.querySelectorAll(".filter_button button");

// Function to filter cards based on selected filter
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);
    
filterableCards.forEach(card => {
    card.classList.add("hide");
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
        card.classList.remove("hide");
    }
});
};

// Event listener for filter button click
filterButtons.forEach(button => button.addEventListener("click", filterCards));

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
