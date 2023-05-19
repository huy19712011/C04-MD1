/*
let str = "abcDEF";

let arr = str.split('');
let newArr = [];

for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == arr[i].toUpperCase()) {
        newArr.push(arr[i].toLowerCase());
    } else if (arr[i] == arr[i].toLowerCase()) {
        newArr.push(arr[i].toUpperCase());
    }
}

console.log(arr);
console.log(newArr);

// console.log(arr);
// let s = arr.join('');
// console.log(s);

arr.includes('c');
*/

// in ra cac so co trong mang a nhung khong co trong mang b
let a = [9, 2, 11, 15];
let b = [11, 3, 7, 9];

// normal for
for (let i = 1; i < a.length; ++i) {

    let check = false;
    for (let j = 0; j < b.length; ++j) {
        if (a[i] === b[j]) {
            check = true;
            break;
        }
    }

    if (!check) console.log(a[i]);
}

// for of
for (let itemA of a) {

    let check = false;
    for (let itemB of b) {
        if (itemA === itemB) {
            check = true;
            break;
        }
    }

    if (!check) console.log(itemA);
}

// includes()
for (let itemA of a) {

    if (!b.includes(itemA)) console.log(itemA);
}

// indexOf
for (let itemA of a) {

    if (b.indexOf(itemA) == -1) console.log(itemA);
}

// using functional programming/lamda expression/arrow functions
a.filter(item=> !b.includes(item)).forEach(item => console.log(item));