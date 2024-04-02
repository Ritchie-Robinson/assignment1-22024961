const data = require('./data');

//data loading
describe('Data Load', () => {
    
    //check data has loaded
    test('Data should be loaded', () => {
      expect(data).toBeDefined();
    });
  
});



