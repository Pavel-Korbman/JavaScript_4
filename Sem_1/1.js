// Сборщик мусора 
// – фоновый процесс, который управляет удалением ненужных объектов в памяти. 


let obj = {
    animal: 'Dog'
};

let obj2 = obj;
obj = null;

console.log(obj2);
console.log(obj);

const elements = document.querySelectorAll('div');
const els = Array.from(elements);

els.forEach((e) => {
    if (e.getAttribute('data-active')) { console.log(e.textContent); }}
    // console.log(e.textContent);

);
