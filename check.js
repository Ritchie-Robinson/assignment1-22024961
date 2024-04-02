const data = require('./data');

function check(questionKey, userTop, userLeft) {
    //get correct answer from data structure
    const correctAnswer = data[questionKey].questions.fullquestion.answer.find(answer => answer.correct === true);
  
    if (correctAnswer) {
        if (userTop === correctAnswer.top && userLeft === correctAnswer.left) {
            // return true if user's answer is correct
            return correctAnswer.correct;
        } else {
            return false;
        }
    }

  }

  module.exports = check;