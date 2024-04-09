# assignment1-22024961

This project is part of an assignment for Web Application Development at UHI, exploring test-driven development (TDD).

## Required

To run this project, you will need the following:

* Node.js: https://nodejs.org/
* Git: https://git-scm.com/ 

## Installation

* Clone the repository to your local machine with Git
```
git clone https://github.com/Ritchie-Robinson/assignment1-22024961.git
```

* Navigate to the project directory

```
cd assignment1-22024961
```

* Install required dependencies
```
npm install
```



To run the test, use the command

```
npm run test
```

## Test Rationale

The are two test files: check.test.js which tests the functionality of the check function (check.js) and data.test.js, which checks data integrity.

### Functionality tests include:
* Is it the right question key, e.g., 'balances', and is it the correct answer. This test can help guide further development, such as the functionality of what happens when the user gets the correct answer. E.g., displaying a success message, or the button changing colour to green.
* Likewise, a test was written to check if a question key is not found, as we do not want the user to get a blank screen, therefore, 301 redirects can be applied or a simple 404 page to let the user know the url parameter is not right
* Equally, we must check if the question key exists but the answer is wrong. This will allow us to further develop functionality, such as prompting the user with hints to help them get the correct answer.
* Lastly, there are three tests to check for values that are not a number, such as NULL, empty string, or string, in case number values are not being passed.

Each of these tests helped us tweak and develop the check function with extra logic to prevent errors.

### Data integrity tests include:
* Firstly, simply check that the data has been loaded
* Then, check that the URL parameter matches a key present in the data, e.g., '/balances'
* Check that the necessary data exists to display on the page:
  - Is there a full question
  - Is there an array of potential answers
  - Subsequently, is there at least one correct answer within the array

The above tests will help us develop the frontend of the application and the logic for displaying data.

## Contact info

Any queries regarding this project, please email: 22024961@uhi.ac.uk 