// 
const elements = document.querySelectorAll('div');
const els = Array.from(elements);

els.forEach((e) => {
    if (e.getAttribute('data-active')) { console.log(e.textContent); }}
    // console.log(e.textContent);

);
