const reviews = [
    {
        title: 'Review title',
        desc: 'Review description',
        rating: 5,
    },
    {
        title: 'Review 2 title',
        desc: 'Review 2 description',
        rating: 3,
    },
    {
        title: 'Review 3 title',
        desc: 'Review 3 description',
        rating: 4,
    },
];

document.addEventListener('DOMContentLoaded', () => {
    renderReviews();

    const addReviewButton = document.getElementById('add-review');
    addReviewButton.addEventListener('click', handleAddReview);
});

function renderReviews() {
    const reviewsElement = document.querySelector('.reviews ul');
    reviewsElement.innerHTML = '';

    reviews.forEach((review) => {
        reviewsElement.appendChild(createReviewItem(review));
    });
}

function createReviewItem(review) {
    const template = document.querySelector('template');
    const reviewItem = template.content.cloneNode(true);

    reviewItem.querySelector('.review-title').textContent = review.title;
    reviewItem.querySelector('.review-desc').textContent = review.desc;
    reviewItem.querySelector('.rating').textContent = review.rating;

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
