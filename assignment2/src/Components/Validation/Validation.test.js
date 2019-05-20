import Validation from './Validation';

it('renders correctly when the length of the text is below the minumum', () => {
    const subject = require('./Validation');

    const input = {
        "message": "abc"
    }

    expect(Validation(input)).toBe("Text too short");
});

it('renders correctly when the length of the text is the minumum', () => {
    const subject = require('./Validation');

    const input = {
        "message": "abcde"
    }

    expect(Validation(input)).toBe("Text long enough");
});

it('renders correctly when the length of the text is above the minumum', () => {
    const subject = require('./Validation');

    const input = {
        "message": "abcdef"
    }

    expect(Validation(input)).toBe("Text long enough");
});