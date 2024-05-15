// Define an array of reviews
const reviews = [
    {
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris euismod, aliquet nunc id, aliquam nunc."
    },
    {
        name: "Jane Smith",
        review: "Nulla facilisi. Sed euismod, mauris id aliquam tincidunt, mauris mauris lacinia mauris, ac aliquam nisi nunc in nunc."
    },
    {
        name: "David Johnson",
        review: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor, velit eu aliquet semper, urna nunc lacinia nunc, id ultrices nunc nunc nec nunc."
    }
];

// Render the reviews section
function renderReviews() {
    const reviewsContainer = document.getElementById("reviews-container");

    // Clear any existing content
    reviewsContainer.innerHTML = "";

    // Loop through the reviews array and create a review element for each review
    reviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        const nameElement = document.createElement("h3");
        nameElement.textContent = review.name;

        const reviewTextElement = document.createElement("p");
        reviewTextElement.textContent = review.review;

        reviewElement.appendChild(nameElement);
        reviewElement.appendChild(reviewTextElement);

        reviewsContainer.appendChild(reviewElement);
    });
}

// Call the renderReviews function to display the reviews
renderReviews();