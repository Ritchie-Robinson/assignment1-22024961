const data = require('./data');

//data loading
describe('Data Load', () => {
    
    //check data has loaded
    test('Data should be loaded', () => {
      expect(data).toBeDefined();
    });

    // does end of URL path match title of the data?
    test('URL path should match title', () => {
      const url = 'https://i-want-to-study-engineering.org/q/balances'; //TODO: in reality, this url would be passed in not hardcoded
      const lastPartOfUrl = url.substring(url.lastIndexOf('/') + 1);
      const title = data.balances.questions.title;
      expect(lastPartOfUrl).toBe(title);
    });


  
  
});



