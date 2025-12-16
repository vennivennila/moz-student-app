const { validateName } = require('../utils/validation'); // create a validation function

test('name should not contain special characters', () => {
    expect(validateName('John')).toBe(true); // valid
    expect(validateName('John@123')).toBe(false); // invalid
});
