function checkNumber() {
    let number = document.querySelector('.number').value;
    let res =document.querySelector('.res');
    try {
        if (!isNaN(number)) {
            // console.log(number, ' - это число');
            res.textContent=`${number} - это число`;
        } else {
            throw new Error('Это не число');
        }

    } catch (error) {
        // console.error('Ошибка ввода: ', error.message);
        res.textContent=`Ошибка ввода: ${error.message}`;
    }

}

const button = document.querySelector('.button');
button.addEventListener('click', () => checkNumber());

