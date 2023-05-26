// 1. ham kiem tra so armstrong
function checkIfArmstrong(number) {
    let sum = 0;
    let digits = number.toString().length;
    let temp = number;

    while (temp > 0) {
        let lastDigit = temp % 10;
        sum = sum + lastDigit ** digits;

        temp = parseInt(temp / 10);
    }

    return sum == number;

}

function checkIfArmstrong2(number) {
    let digits = number.toString().length;

    return  number.toString().split('').reduce((sum, value) => sum + parseInt(value)**digits, 0) == number;

}

function checkIfArmstrongNumber3(number) {
    const digits = number.toString().length;
    return number.toString().split('').map(i => parseInt(i) ** digits).reduce((sum, value) => sum + value, 0) == number;
}


// console.log(checkIfArmstrong(154));
for (let i = 0; i <= 1000; ++i) {
    if (checkIfArmstrong2(i)) {
        console.log(i);
    }
}