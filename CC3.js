function centralController(questionArray){
    this.questionArray = questionArray;
    this.index = 0;
    this.scoire = 0;
}


centralController.prototype.displayQuestion = function(){
    return this.questionArray[this.index];
}

centralController.prototype.confirmCorrectAnswer = function(userChoice){
    if(this.displayQuestion().isCorrectAnswer(userChoice)){
        this.score++;
    }
    this.index++
}

centralController.prototype.isEnded = function(){
    return  this.questionArray.length === this.index;
}