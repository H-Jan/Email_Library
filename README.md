# EMAIL AND PASSWORD VALIDATION
### Functions of Library Include

**checkEmail()**
 - Returns a boolean value of 'true' or 'false' if an email is valid according to common email address structures

> The below functions are intended for flexible use according to the programmers requirements. Each function returns a numerical value - a *calculated value* depending on the requirements of the function. Depending on password security requirements, the package is flexible in offering more lenient password combinations based on combinations of below functions, or tougher password combinations also based on the below functions

**calcChars()**
 - Returns a calculated number for amount of characters

**calcUpCaseLetters()**
 - Returns a calculated number for amount of uppercase characters with *non-uppercase* characters required for score

**calcLowerCaseLetters()**
 - Returns a calculated number for amount of lowercase characters with *non-lowercase* characters required for a score

**calcNums()**
 - Returns a calculated number for amount of numbers with *non-numeric* characters required for a score

**calcSymbols()**
 - Returns a calculated number for amount of counts of symbols

**calcMidNumSymb()**
 - Returns a calculated number for amount of numbers and symbols in the middle of the string

**calcPassWordRequirements()**
 - Returns a calculated number for passwords meeting 8 char minimunm length and 3/4 below parameters met within function

**calcLettersOnly()**
 - Returns a calculated number for conditional notion that every character is a letter

**calcNumbersOnly()**
 - Returns a calculated number for conditional notion that every character is a number