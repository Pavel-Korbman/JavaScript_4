const goodField = document.querySelector('.goodfield');
const feedbackField = document.querySelector('.feedbackfield');
const setButton = document.querySelector('.set');

setButton.addEventListener('click', () => {
    if (feedbackField.value.includes(',')) {
        alert('Не используйте запятые в отзыве');
        feedbackField.value = '';
    } else if (goodField.value && feedbackField.value) {
        const feedbacks = (localStorage.getItem(goodField.value.trim())) ?
            localStorage.getItem(goodField.value.trim()).split(',') : []; //
        feedbacks.unshift(feedbackField.value.trim());
        localStorage.setItem(goodField.value.trim(), feedbacks);
        alert('Отзыв сохранён');
        goodField.value = '';
        feedbackField.value = '';
    } else { alert('Необходимо заполнить все поля'); }
});
