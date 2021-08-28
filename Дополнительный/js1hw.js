//Создайте Цикл, которая принимает массив и возвращает типы значений (типы данных) в новом массиве.

let arrayValuesTypes = [1, 2, "null", []]

let string = []
let number = []
let massive = []

for(let item of arrayValuesTypes){
    switch (typeof(item)) {
        case 'string':
            string.push(item)
            break;
        case 'number':
            number.push(item)
            break;
        default:
            massive.push(item)
            break;
    }
}

console.log(string);
console.log(number);
console.log(massive);



let arrayValuesTypes1 = ["214", true, false, 2, 2.15, [], null]

let str = []
let bool = []
let num = []
let trash = []

for(let item of arrayValuesTypes1){
    switch (typeof(item)) {
        case 'string':
            str.push(item)
            break;
        case 'number':
            num.push(item)
            break;
        case 'boolean':
            bool.push(item)
            break;
        default:
            trash.push(item)
            break;
    }
}

console.log(str);
console.log(bool);
console.log(num);
console.log(trash);

let arrayValuesTypes2 = [21.1, "float", "array", ["I am array"], null, true, 214]

let strin = []
let numb = []
let boolean = []
let rubbish = []

for(let item of arrayValuesTypes2  ){
    switch (typeof(item)) {
        case 'string':
            strin.push(item)
            break;   
        case 'number':
            numb.push(item)
            break;
        case 'boolean':
            boolean.push(item)
            break;
            
        default:
            rubbish.push(item)
            break;
            
    }

    
}
for(let item of arrayValuesTypes2[3]){
    switch (typeof(item)) {
        case 'string':
            strin.push(item)
            break;
    
        default:
            rubbish.push(item)
            break;
    }
}

console.log(strin);
console.log(boolean);
console.log(numb);
console.log(rubbish);




//Создайте Цикл, которая принимает массив чисел или букв и возвращает строку.

let arrayToString = [1, 2, 3, 4, 5, 6]  
for(let  item of arrayToString){
    console.log(item);
}



let arrayToString1 = ["a", "b", "c", "d", "e", "f"] 
for(let item of arrayToString1){
    console.log(item);
} 


let arrayToString2 = [1, 2, 3, "a", "s", "dAAAA"]  
for(let item of arrayToString2){
    console.log(item);
}