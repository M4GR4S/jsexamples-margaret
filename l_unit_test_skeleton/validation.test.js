const {isEmpty, isEmail} = require("./validation.js");

// Test Case 1: tests isEmpty to return true if an empty string is passed in
test('should return true when empty', () => {
    expect(isEmpty("")).toBeTruthy();
})

// Test Case 2: tests isEmpty to return false if the parameter is not empty
test('should return false when NOT empty', () => {
    expect(isEmpty("John")).toBeFalsy();
})

// Test Case 3: tests isEmail to return true if parameter passed in is a valid email
test('should return true when valid email', () => {
    const result = isEmail("johndoe@gmail.com")
    expect(result).toBe(true);
})

// Test Case 4: tests isEmail to return flase if parameter passed in is an invalid email
test('should return false when INVALID email', () => {
    const result = isEmail("johndoe")
    expect(result).toBe(false);
})

// Test Case 5: write an array to run a series of values to test against a function/feature (isEmpty)
test.each([
    {username: "", expected: true},
    {username: "john", expected: false},
])('.isEmpty($username', ({username, expected}) => {
    expect(isEmpty(username)).toBe(expected);
})

// Test Case 6: write an array to run a series of values to test against isEmail
// test value: "" - expected: false
// test value: "johndoe" - expected: false
// test value: "johndoe@gmail" - expected: false
// test value: "johndoe@gmail.com" - expected: true

test.each([
    {email:"", expected: false},
    {email:"john", expected: false},
    {email:"johndoe@gmail", expected: false},
    {email:"johndoe@gmail.com", expected: true}
])('.isEmail($email', ({email, expected}) => {
    expect(isEmail(email)).toBe(expected);
})