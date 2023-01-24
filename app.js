let question = [
    new examQuestion("What is the first Question", ["Buhari","Obasanjo", "Taiwo", "Kilo"], "Taiwo"),
    
    new examQuestion("What is the second Question", ["Buhari","Obasanjo", "Taiwo", "Kilo"], "Buhari"),
    new examQuestion("What is the third Question", ["Buhari","Obasanjo", "Taiwo", "Kilo"], "Obasanjo"),
    new examQuestion("What is the fourth Question", ["Buhari","Obasanjo", "Taiwo", "Kilo"], "Buhari"),

]

let central = new centralControl(question);

function QuestionandAnswer(){
    if(central.isEnded()){
        score();
    }else{
        let question = document.getElementById("question");
        let allQuestions = central.displayQuestion().question;
        question.innerHTML = allQuestions;

        let choices =central.displayQuestion().choices;
        choices.map((e, index)=> {
            let span = document.getElementById("choice"+index);
            span.innerHTML = e;


            btnChoice("choice"+ index, e)
        })
    }


}

QuestionandAnswer();

function btnChoice(id, elements){
    let buttons = document.getElementById(id);
    buttons.onclick = function(){
        central.icorrectChoice(elements)
        QuestionandAnswer();
    }
}


function score(){
  let score = "<h1>Hello</h1>";
  let updatedScore = central.score;
  let totalScore = question.length
  score+= `You score a total of ${updatedScore}/${totalScore}`;
  let quiz = document.getElementById("quiz");
  quiz.innerHTML = score
}