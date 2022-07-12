// Email must not contain ASC2 characters (Uppercase, Digits, Chars, Characters)
var accepted_chars = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
var alphachars = /[a-zA-Z]/;
var upperCase = /[A-Z]/;
var lowerCase = /[a-z]/;
var numerical = /[0-9]/;
var symbols = /[^a-zA-Z0-9]/;
var numericalSymbols = /[^a-zA-Z]/;
function checkEmail(email) {
    // If no email entered return false
    if (!email)
        return false;
    var emailSplit = email.split('@');
    // If email is improperly split
    if (emailSplit.length != 2) {
        return false;
    }
    var account = emailSplit[0];
    var address = emailSplit[1];
    if (account.length > 64) {
        return false;
    }
    else if (address.length > 255) {
        return false;
    }
    var domain = address.split('.');
    if (domain.some(function (part) {
        return part.length > 63;
    }))
        return false;
    if (!accepted_chars.test(email)) {
        return false;
    }
    return true;
}
// Using test method for 'global search' matches across different characters instead of iterations (slower) and returning a boolean
var characterList = function (char) { return char.split(''); };
var isAlphaChar = function (char) { return alphachars.test(char); };
var isUpperCase = function (char) { return upperCase.test(char); };
var isLowerCase = function (char) { return lowerCase.test(char); };
var isNumerical = function (char) { return numerical.test(char); };
var isSymbol = function (char) { return symbols.test(char); };
var isNumericalSymbol = function (char) { return numericalSymbols.test(char); };
var numberSequence = '1234567890';
var alphabetSequence = 'abcdefghijklmnopqrstuvwxyz';
var symbolSequence = '~!@#$%^&*()_+{}|<>?,./';
function calcChars(input) {
    return input.length * 4;
}
// Count of UpperCase characters with non-uppercase characters required for score
function calcUpCaseLetters(input) {
    var count = characterList(input).reduce(function (count, char) {
        return isUpperCase(char) ? count + 1 : count;
    }, 0);
    var length = input.length;
    return (count && count < length) ? (length - count) * 2 : 0;
}
// Count of loercase characters with non-lowercase characters required for a score
function calcLowerCaseLetters(input) {
    var count = characterList(input).reduce(function (count, char) {
        return isLowerCase(char) ? count + 1 : count;
    }, 0);
    var length = input.length;
    return (count && count < length) ? count * 4 : 0;
}
// Checks count of numbers with non-numeric characters required
function calcNums(input) {
    var count = characterList(input).reduce(function (count, char) {
        return isSymbol(char) ? count + 1 : count;
    }, 0);
    return count * 6;
}
// checks counts of symbols
function calcSymbols(input) {
    var count = characterList(input).reduce(function (count, char) {
        return isSymbol(char) ? count + 1 : count;
    }, 0);
    return count * 6;
}
// checks counts of numbers and symbols in the middle of the string
function calcMidNumSymb(input) {
    var list = characterList(input).slice(1, input.length - 1);
    var count = list.reduce(function (count, char) {
        return isNumericalSymbol(char) ? count + 1 : count;
    }, 0);
    return count * 2;
}
// Checks 8 char minimunm length and 3/4 below parameters met
function calcPassWordRequirements(input) {
    var hasLowerCase = false;
    var hasUpperCase = false;
    var hasNumber = false;
    var hasSymbol = false;
    characterList(input).forEach(function (char) {
        if (isLowerCase(char)) {
            hasLowerCase = true;
        }
        else if (isUpperCase(char)) {
            hasUpperCase = true;
        }
        else if (isNumerical(char)) {
            hasNumber = true;
        }
        else {
            hasSymbol = true;
        }
    });
    var reqA = (input.length >= 8) ? 1 : 0;
    var reqB = hasLowerCase ? 1 : 0;
    var reqC = hasUpperCase ? 1 : 0;
    var reqD = hasNumber ? 1 : 0;
    var reqE = hasSymbol ? 1 : 0;
    var reqTotal = reqB + reqC + reqD + reqE;
    if (reqA && (reqTotal >= 3)) {
        return (reqA + reqTotal) * 2;
    }
    else {
        return 0;
    }
}
// checks if every character is a letter
function calcLettersOnly(input) {
    return characterList(input).every(function (char) { return isAlphaChar(char); }) ? -input.length : 0;
}
// checks if every character is a number
function calcNumbersOnly(input) {
    return characterList(input).every(function (char) { return isNumerical(char); }) ? -input.length : 0;
}
module.exports = {
    checkEmail: checkEmail,
    calcChars: calcChars,
    calcUpCaseLetters: calcUpCaseLetters,
    calcLowerCaseLetters: calcLowerCaseLetters,
    calcNums: calcNums,
    calcSymbols: calcSymbols,
    calcMidNumSymb: calcMidNumSymb,
    calcPassWordRequirements: calcPassWordRequirements,
    calcLettersOnly: calcLettersOnly,
    calcNumbersOnly: calcNumbersOnly
};
