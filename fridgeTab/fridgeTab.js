function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}






function searchFoodCard() {
    const searchInput = document.getElementById("searchFood");
    const searchTerm = searchInput.value.toLowerCase();
    const foodCards = document.getElementsByClassName("food-card");

    for (const card of foodCards) {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

function clearSearch() {
    const searchInput = document.getElementById("searchFood");
    searchInput.value = ""; // Clear the search input

    // Make all food cards visible
    const foodCards = document.getElementsByClassName("food-card");
    for (const card of foodCards) {
        card.style.display = "block";
    }
}


/*
function addFoodCard() {
    const foodNameInput = document.getElementById("foodName");
    const foodName = foodNameInput.value;

    if (foodName.trim() !== "") {
        const foodCards = document.getElementById("foodCards");
        const foodCard = document.createElement("div");
        foodCard.classList.add("food-card");
        foodCard.textContent = foodName;
        foodCard.setAttribute("onmouseover", "showDeleteIcon(this)");
        foodCard.setAttribute("onmouseout", "hideDeleteIcon(this)");
        foodCard.setAttribute("onclick", "deleteCard(this)");
        const deleteIcon = document.createElement("span");
        deleteIcon.textContent = "x";
        deleteIcon.classList.add("delete-icon");
        foodCard.appendChild(deleteIcon);
        foodCards.appendChild(foodCard);
        foodNameInput.value = "";
    }
}
*/


function showDeleteIcon(card) {
    const deleteIcon = card.querySelector(".delete-icon");
    if (deleteIcon) {
        deleteIcon.style.display = "block";
    }
}

function hideDeleteIcon(card) {
    const deleteIcon = card.querySelector(".delete-icon");
    if (deleteIcon) {
        deleteIcon.style.display = "none";
    }
}

function deleteCard(card) {
    const foodCards = document.getElementById("foodCards");
    foodCards.removeChild(card);
}








// Function to load food cards from localStorage
function loadFoodCards() {
    const foodCards = document.getElementById("foodCards");
    const savedCards = localStorage.getItem("foodCards");

    if (savedCards) {
        foodCards.innerHTML = savedCards;
    }
}

// Function to save food cards to localStorage
function saveFoodCards() {
    const foodCards = document.getElementById("foodCards");
    localStorage.setItem("foodCards", foodCards.innerHTML);
}

// Call loadFoodCards to load previously saved cards when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadFoodCards(); // Call loadFoodCards when the DOM is fully loaded
});

// Call saveFoodCards whenever a new card is added
function addFoodCard() {
    const foodNameInput = document.getElementById("foodName");
    const foodName = foodNameInput.value;

    if (foodName.trim() !== "") {
        const foodCards = document.getElementById("foodCards");
        const foodCard = document.createElement("div");
        foodCard.classList.add("food-card");
        foodCard.textContent = foodName;
        foodCard.setAttribute("onmouseover", "showDeleteIcon(this)");
        foodCard.setAttribute("onmouseout", "hideDeleteIcon(this)");
        foodCard.setAttribute("onclick", "deleteCard(this)");
        const deleteIcon = document.createElement("span");
        deleteIcon.textContent = "x";
        deleteIcon.classList.add("delete-icon");
        foodCard.appendChild(deleteIcon);
        foodCards.appendChild(foodCard);
        foodNameInput.value = "";
    }

    // After adding a card, save the updated content to localStorage
    saveFoodCards();
}

