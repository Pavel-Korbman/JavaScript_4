const productFeedbacks = (el) => {
    el.addEventListener('click', () => {
        const good = el.textContent;
        const feedbacks = localStorage.getItem(el.textContent).split(',');
        feedbacks.forEach(element => {
            if (element !== '') {
                const feedback = document.createElement('p');
                feedback.textContent = element;
                el.appendChild(feedback);
                const delButton = document.createElement('button');
                delButton.textContent = 'Удалить';
                feedback.appendChild(delButton);
                delButton.addEventListener('click', () => {
                    feedbacks.splice(feedbacks.indexOf(element), 1);
                    localStorage.setItem(good, feedbacks);
                    feedback.remove();
                    if (feedbacks.length === 0) {
                        localStorage.removeItem(good)
                        location.reload();
                    }
                })
            }

        });
    })
}

const goodsList = document.querySelector('.goodsList');
const message = document.querySelector('.message');

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(localStorage.key(i))) {
        const product = document.createElement('h3');
        product.textContent = localStorage.key(i);
        goodsList.appendChild(product);
        productFeedbacks(product);
    }
}

(goodsList.children.length===0)? message.textContent='Пока нет отзывов': message.textContent='';
