const check = require('./check');

describe('Answer check function', () => {

    //if key found and right answer
    test('if correct key and top and left values correct, equal true', () => {
        expect(check('balances', 240, 0)).toBe(true);
    })

    //if key found but wrong answer
    test('if questionKey exists, equal true', () => {
        expect(check('balances', 100, 100)).toBe(false);
    })

    //if key not found
    test('if questionKey not found', () => {
        expect(check('eevevw', 100, 100)).toBe('no such key');
    })
  
  });
  