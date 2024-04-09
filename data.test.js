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

    //is there an array of answers
    test('Answer array present', () => {
      expect(data.balances.questions.fullquestion.answer).toBeDefined();
    });
    
    //check that there is at least 1 correct answer true
    test('At least 1 true/correct answer present', () => {
      //get the answers array first, as checked in above test
      //'?' optional chaining a bit pointless here as we know from above test they exist
      //however, added for good practice as do not want test to fail based on anything 
      //but a correct answer not being present. Hence why optional chaining not used in previous test
      const answers = data.balances?.questions?.fullquestion?.answer;

      //check at least 1 answer is present in array
      const isCorrect = answers.some(answer => answer.correct === true);
      expect(isCorrect).toBe(true);
    })

  
});



