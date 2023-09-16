
function capitalize(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function reverseString(string) {
    return string.split('').reverse().join('');
}


class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }
}




function caesarCipher(string, shift) {
    if (shift < 0) shift += 26; 

    return string.replace(/[a-zA-Z]/g, function (char) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - offset + shift) % 26) + offset);
    });
}



function analyzeArray(arr) {
    if (arr.length === 0) {
        return {
            average: 0,
            min: undefined,
            max: undefined,
            length: 0,
        };
    }

    const sum = arr.reduce((acc, val) => acc + val, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = sum / arr.length;

    return {
        average,
        min,
        max,
        length: arr.length,
    };
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };