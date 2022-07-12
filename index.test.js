const tst = require('./index')

test('Empty Email Test', () => {
    expect(tst.checkEmail('')).toBe(false)
})

test('No Address Email Test', () => {
    expect(tst.checkEmail('blueberries@')).toBe(false)
})

test('Empty Email Test', () => {
    expect(tst.checkEmail('')).toBe(false)
})

test('Legitimate Email Test', () => {
    expect(tst.checkEmail('blueberries@gmail.com')).toBe(true)
})

test('calcChars Empty Password Function Test', () => {
    expect(tst.calcChars('')).toBe(0)
})

test('calcChars Password Function Test', () => {
    expect(tst.calcChars('Password')).toBe(32)
})

test('calcUpCaseLetters False Function Test', () => {
    expect(tst.calcUpCaseLetters('')).toBe(0)
})

test('calcUpCaseLetters False Function Test', () => {
    expect(tst.calcUpCaseLetters('password')).toBe(0)
})

test('calcUpCaseLetters True Function Test', () => {
    expect(tst.calcUpCaseLetters('PASSWOd')).toBe(2)
})

test('calcLowerCaseLetters False Function Test', () => {
    expect(tst.calcLowerCaseLetters('')).toBe(0)
})

test('calcLowerCaseLetters False Function Test', () => {
    expect(tst.calcLowerCaseLetters('1')).toBe(0)
})

test('calcLowerCaseLetters True Function Test', () => {
    expect(tst.calcLowerCaseLetters('aBA')).toBe(4)
})

test('calcLowerCaseLetters True Function Test', () => {
    expect(tst.calcLowerCaseLetters('PASSWod')).toBe(8)
})

test('calcNums False Function Test', () => {
    expect(tst.calcNums('12')).toBe(0)
})

test('calcNums True Function Test', () => {
    expect(tst.calcNums('a1')).toBe(0)
})

test('calcNums True Function Test', () => {
    expect(tst.calcNums('A12')).toBe(0)
})

test('calcSymbols False Function Test', () => {
    expect(tst.calcSymbols('+')).toBe(6)
})

test('calcSymbols True Function Test', () => {
    expect(tst.calcSymbols('Aa1')).toBe(0)
})

test('calcSymbols True Function Test', () => {
    expect(tst.calcSymbols('++A')).toBe(12)
})

test('calcMidNumSymb False Function Test', () => {
    expect(tst.calcMidNumSymb('AbA')).toBe(0)
})

test('calcMidNumSymb True Function Test', () => {
    expect(tst.calcMidNumSymb('A1@B3C+')).toBe(6)
})

test('calcPassWordRequirements False Function Test', () => {
    expect(tst.calcPassWordRequirements('Aa1$')).toBe(0)
})

test('calcPassWordRequirements True Function Test', () => {
    expect(tst.calcPassWordRequirements('AAAbbb123')).toBe(8)
})

test('calcLettersOnly False Function Test', () => {
    expect(tst.calcLettersOnly('A1')).toBe(0)
})

test('calcLettersOnly True Function Test', () => {
    expect(tst.calcLettersOnly('AbCdE')).toBe(-5)
})

test('calcNumbersOnly False Function Test', () => {
    expect(tst.calcNumbersOnly('1!')).toBe(0)
})

test('calcNumbersOnly True Function Test', () => {
    expect(tst.calcNumbersOnly('12345')).toBe(-5)
})









