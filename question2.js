function examQuestion(question, choices, answer){
    this.question = question;
    this.choices =choices;
    this.answer = answer;
}

examQuestion.prototype.isCorrectAnswer = function(answerChoice){
   return this.answer === answerChoice
}