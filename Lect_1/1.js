// Сборщик мусора 
// – фоновый процесс, который управляет удалением ненужных объектов в памяти. 


let obj = {
    animal: 'Dog'
};

let obj2 = obj;
obj = null;

console.log(obj2);
console.log(obj);


