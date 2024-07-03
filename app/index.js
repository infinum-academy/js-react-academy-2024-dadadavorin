const LOCAL_STORAGE_KEY = 'reviews';

const reviews = loadFromLocalStorage() || [];

document.addEventListener('DOMContentLoaded', () => {
    renderReviews();

    const addReviewButton = document.getElementById('add-review');
    addReviewButton.addEventListener('click', handleAddReview);
});

function renderReviews() {
    const reviewsElement = document.querySelector('.reviews ul');
    reviewsElement.innerHTML = '';

    reviews.forEach((review, index) => {
        reviewsElement.appendChild(createReviewItem(review, index));
    });

    updateAverageRating();
    saveToLocalStorage(reviews);
}

function createReviewItem(review, index) {
    const template = document.querySelector('template');
    const reviewItem = template.content.cloneNode(true);

    reviewItem.querySelector('.review-title').textContent = review.title;
    reviewItem.querySelector('.review-desc').textContent = review.desc;
    reviewItem.querySelector('.rating').textContent = review.rating;
    reviewItem.querySelector('.delete-review').addEventListener('click', () => handleDeleteReview(index));

    return reviewItem;
}

function handleAddReview() {
    const reviewTitle = document.getElementById('review-title').value.trim();
    const reviewContent = document.getElementById('review').value.trim();
    const reviewRating = parseInt(document.getElementById('rating').value.trim(), 10);

    if (!reviewTitle || !reviewContent || reviewRating < 1 || reviewRating > 5) {
        alert("Please enter a valid review title, description, and rating between 1 and 5.");
        return;
    }

    const newReview = {
        title: reviewTitle,
        desc: reviewContent,
        rating: reviewRating
    };

    reviews.push(newReview);
    renderReviews();

    document.getElementById('review-title').value = ""; // Clear title input
    document.getElementById('review').value = ""; // Clear textarea
    document.getElementById('rating').value = ""; // Clear rating input
}

function handleDeleteReview(index) {
    reviews.splice(index, 1);
    renderReviews();
}

function updateAverageRating() {
    const totalRatings = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = (totalRatings / reviews.length).toFixed(1);
    document.querySelector('.rating-sum-value').textContent = averageRating;
}

function saveToLocalStorage(reviewList) {
    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem(LOCAL_STORAGE_KEY, reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem(LOCAL_STORAGE_KEY);
    return JSON.parse(reviewListString);
}
