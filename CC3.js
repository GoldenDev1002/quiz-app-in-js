function centralControl(questionArray){
    this.questionArray = questionArray;
    this.index = 0;
    this.score = 0;

}

centralControl.prototype.displayQuestion = function(){
return this.questionArray[this.index]
}

centralControl.prototype.icorrectChoice = function(userChoice){
if(this.displayQuestion().I){
    this.score++;
}
this.index++
}


centralControl.prototype.isEnded= function(){
    return this.questionArray.length === this.index;
}