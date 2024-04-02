const check = require('./check');

describe('Answer check function', () => {

    test('if correct key and top and left values correct, equal true', () => {
        expect(check('balances', 240, 0)).toBe(true);
    })

    test('if questionKey exists, equal true', () => {
        expect(check('balances', 100, 100)).toBe(false);
    })
  
  });
  