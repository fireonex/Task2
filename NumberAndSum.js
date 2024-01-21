function sumDigPow(a, b) {
    let result = [];

    for (let i = a; i <= b; i++) {
        let sum = 0;
        let digits = i.toString().split('');

        for (let j = 0; j < digits.length; j++) {
            sum += Math.pow(digits[j], j + 1);
        }

        if (sum === i) {
            result.push(i);
        }
    }

    return result;
}
