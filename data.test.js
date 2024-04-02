const data = require('./data');

//data loading
describe('Data Load', () => {
    
    //check data has loaded
    test('Data should be loaded', () => {
      expect(data).toBeDefined();
    });

    //check URL matches a key present in the data
    test('URL path should a key present in the data', () => {
      const url = 'https://i-want-to-study-engineering.org/q/balances'; //TODO: in reality, this url would be passed in not hardcoded
      const lastPartOfUrl = url.substring(url.lastIndexOf('/') + 1);
      
      //iterate over keys in data object
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
    
          // does last part of URL match key
          if (lastPartOfUrl === key) {
            expect(lastPartOfUrl).toBe(key);
            return; //exit once match is found
          }
        }
      }
      
      // If no match, fail test
      fail('No matching questionKey found for URL');
    });


    // check there is a full question
    test('There should be a full question to display', () => {
      expect(data.balances.questions.fullquestion.question).toBeDefined();
    });
    
  
});



