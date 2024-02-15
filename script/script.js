//Поиск максимального числа
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [5, 7, 2, 10, 4];
console.log(findMax(numbers));


// Генератор таблицы умножения
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiplicationTable(5);


// Подсчет четных чисел
function countEvenNumbers(arr) {
    let count = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

const numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countEvenNumbers(numer));


// Реверс массива
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(originalArray));