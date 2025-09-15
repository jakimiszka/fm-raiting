const submitBtn = document.getElementById('submit-btn');
const ratingBtns = document.querySelectorAll('.rating button');
const card = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-you-card');

submitBtn.disabled = true;
submitBtn.style.backgroundColor = 'grey';

ratingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        ratingBtns.forEach((button) => button.classList.remove('selected-rating'));
        btn.classList.add('selected-rating');
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = 'var(--orange-500)';
    });
});

submitBtn.addEventListener('click', (e) => {
   e.preventDefault();
    const selectedRating = document.querySelector('.selected-rating').dataset.value;
    card.style.display = 'none';
    thankYouCard.style.display = 'flex';
    thankYouCard.querySelector('a').textContent =  selectedRating;
});
 