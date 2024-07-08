function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }
    let basestr = '';
    for (let i = 0; i < length - str.length; i++) {
        basestr += symbol;
    }
    if (toLeft) {
        return basestr + str;
    } else {
        return str + basestr;
    }
}
console.log(padString('Ivan', 6, '*')); 
console.log(padString('Ivan', 6, '*', true));
console.log(padString('Ivan', 3, '*'));

