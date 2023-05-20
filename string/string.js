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
/*
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
*/

let str = "Hello C04";

//
console.log(str.length);
console.log(str[4]);
console.log(str.at(4));

console.log(str[-1]);
console.log(str.at(-1));
console.log(str.at(-3));

// khong thay doi duoc
str[0] = 'Z';
console.log(str);

// split
let split = str.split(' ');
console.log(split);

let split1 = str.split('');
console.log(split1);

// let join1 = split1.join('');
let join1 = split1.join('***');
console.log(join1);

// indexOf
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));
console.log(str.lastIndexOf('llo'));
console.log(str.lastIndexOf('llo'));
console.log(str.lastIndexOf('Llo'));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes('04'));

//
let slice = str.slice();
console.log(slice);

let slice2 = str.slice(0, 5);
console.log(slice2);

console.log(str.slice(2, 8));






