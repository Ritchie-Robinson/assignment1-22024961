const check = require('./check');

describe('Answer check function', () => {

    //if key found and right answer
    test('if correct key and top and left values correct, equal true', () => {
        expect(check('balances', 240, 0)).toBe(true);
    })

    //if key not found
    test('if questionKey not found', () => {
        expect(check('eevevw', 100, 100)).toBe('no such key');
    })

    //if key found but wrong answer
    test('if questionKey exists but wrong inputs', () => {
        expect(check('balances', 100, 100)).toBe('incorrect input values');
    });
    
    //if not number values
    test('if not a number', () => {
        expect(check('balances', 'a', 'b')).toBe('not a number');
    });
    test('if NULL values', () => {
        expect(check('balances', null, null)).toBe('not a number');
    });
    test('if NULL values', () => {
        expect(check('balances', '', '')).toBe('not a number');
    });
    
  });
  