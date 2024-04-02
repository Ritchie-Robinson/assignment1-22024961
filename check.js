const data = require('./data');

function check(questionKey, userTop, userLeft) {

    //first check if key exists to avoid undefined error
    if (data.hasOwnProperty(questionKey)) {

        //get correct answer from data structure
        const correctAnswer = data[questionKey].questions.fullquestion.answer.find(answer => answer.correct === true);

        if (userTop === correctAnswer.top && userLeft === correctAnswer.left) {
            
            // return true if user's answer is correct
            return correctAnswer.correct;

        } else if (typeof userTop !== 'number' && typeof userLeft !== 'number') {

            //not a number
            return 'not a number';

        } else if (userTop !== correctAnswer.top || userLeft !== correctAnswer.left) {
            
            // input values incorrect
            return 'incorrect input values';

        }  else {
            return false;
        }

    } else {
        return 'no such key';
    }

}

module.exports = check;