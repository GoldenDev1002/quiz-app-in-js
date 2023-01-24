function questionConstructor(questions, options, choices){
    this.questions = questions;
    this.option = options;
    this.choices = choices;
}

questionConstructor.prototype.isCorrectAnswer = function(userChoice){
    return this.choices === userChoice
}