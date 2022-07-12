
// Email must not contain ASC2 characters (Uppercase, Digits, Chars, Characters)

const accepted_chars = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const alphachars = /[a-zA-Z]/;
const upperCase = /[A-Z]/;
const lowerCase = /[a-z]/;
const numerical = /[0-9]/;
const symbols = /[^a-zA-Z0-9]/;
const numericalSymbols = /[^a-zA-Z]/;

function checkEmail(email: string): boolean{
    // If no email entered return false
    if (!email) return false;
    const emailSplit = email.split('@');
    // If email is improperly split
    if (emailSplit.length != 2) {
        return false
    }

    const account: string = emailSplit[0];
    const address: string = emailSplit[1];

    if(account.length > 64) {
        return false
    }
    else if(address.length > 255){
        return false
    }

    const domain: string[] = address.split('.');

    if (domain.some(function (part) {
        return part.length > 63;
    })) return false;

    if (!accepted_chars.test(email)){
        return false;
    }

    return true;
}

// Using test method for 'global search' matches across different characters instead of iterations (slower) and returning a boolean
const characterList = (char: string): string[] => char.split('');
const isAlphaChar = (char: string): boolean => alphachars.test(char);
const isUpperCase = (char: string): boolean => upperCase.test(char);
const isLowerCase = (char: string): boolean => lowerCase.test(char);
const isNumerical = (char: string): boolean => numerical.test(char);
const isSymbol = (char: string): boolean => symbols.test(char);
const isNumericalSymbol = (char: string): boolean => numericalSymbols.test(char);

const numberSequence = '1234567890';
const alphabetSequence = 'abcdefghijklmnopqrstuvwxyz';
const symbolSequence = '~!@#$%^&*()_+{}|<>?,./';

function calcChars(input: string): number {
    return input.length * 4
}

// Count of UpperCase characters with non-uppercase characters required for score
function calcUpCaseLetters(input: string): number {
    const count = characterList(input).reduce((count, char) => {
        return isUpperCase(char) ? count + 1: count;
    }, 0);
    const length = input.length;
    return (count && count < length) ? (length - count) * 2 : 0;
}

// Count of loercase characters with non-lowercase characters required for a score
function calcLowerCaseLetters(input: string): number {
    const count = characterList(input).reduce((count, char) => {
        return isLowerCase(char) ? count + 1: count;
    }, 0);
    const length = input.length;
    return (count && count < length) ? count * 4 : 0;
}

// Checks count of numbers with non-numeric characters required
function calcNums(input: string): number{
    const count = characterList(input).reduce((count, char) => {
        return isSymbol(char) ? count + 1 : count;
    }, 0);
    return count * 6;
}

// checks counts of symbols
function calcSymbols(input: string): number {
    const count = characterList(input).reduce((count, char) => {
        return isSymbol(char) ? count + 1 : count;
    }, 0);
    return count * 6;
}

// checks counts of numbers and symbols in the middle of the string
function calcMidNumSymb(input: string): number {
    const list = characterList(input).slice(1, input.length - 1);
    const count = list.reduce((count, char) => {
        return isNumericalSymbol(char) ? count + 1 : count;
    }, 0);
    return count * 2;
}

// Checks 8 char minimunm length and 3/4 below parameters met
function calcPassWordRequirements(input: string): number{
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    let hasSymbol = false;
    characterList(input).forEach(char => {
        if (isLowerCase(char)) {
            hasLowerCase = true;
        } else if (isUpperCase(char)) {
            hasUpperCase = true;
        } else if (isNumerical(char)) {
            hasNumber = true;
        } else {
            hasSymbol = true;
        }
    });

    const reqA = (input.length >= 8) ? 1 : 0;
    const reqB = hasLowerCase ? 1 : 0;
    const reqC = hasUpperCase ? 1 : 0;
    const reqD = hasNumber ? 1 : 0;
    const reqE = hasSymbol ? 1 : 0;

    const reqTotal = reqB + reqC + reqD + reqE;
    if (reqA && (reqTotal >= 3)) {
        return (reqA + reqTotal) * 2;
    } else {
        return 0;
    }
}

// checks if every character is a letter
function calcLettersOnly(input: string): number{
    return characterList(input).every(char => isAlphaChar(char)) ? -input.length : 0;
}

// checks if every character is a number
function calcNumbersOnly(input: string): number {
    return characterList(input).every(char => isNumerical(char)) ? -input.length : 0;
}

module.exports = {
    checkEmail,
    calcChars,
    calcUpCaseLetters,
    calcLowerCaseLetters,
    calcNums,
    calcSymbols,
    calcMidNumSymb,
    calcPassWordRequirements,
    calcLettersOnly,
    calcNumbersOnly,
};

