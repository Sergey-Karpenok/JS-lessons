let num = 266219;
let arr = Array.from(String(num), Number);
console.log('arr: ', arr);

const calculate = (arr) => {
    let sum = 1;
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i += 1) {
        sum *= arr[i];

    }
    return sum;
};

let newNum = calculate(arr) ** 3;

let str = newNum.toString();
console.log(str[0] + str[1]);