




const inputGood = document.querySelector('.inputGood');
const inputOptions = document.querySelector('.inputOptions');

inputGood.value = localStorage.key(0);
inputOptions.value = localStorage.getItem(inputGood.value);

inputGood.addEventListener('change', (event) => {
    localStorage.clear();
    localStorage.setItem(inputGood.value, inputOptions.value);
    // inputGood.value='';
});

inputGood.addEventListener('click', (event) => {
    // localStorage.setItem(inputGood.value, inputOptions.value);
    inputGood.value = '';
});

inputOptions.addEventListener('change', (event) => {
    localStorage.setItem(inputGood.value, inputOptions.value);
});

inputOptions.addEventListener('click', (event) => {
    // localStorage.setItem(inputGood.value, inputOptions.value);
    inputOptions.value = '';
});