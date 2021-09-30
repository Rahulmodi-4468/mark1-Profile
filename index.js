var score = 0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name? ");
console.log("Wellcome "+userName +"\nFor every correct answer you got 1 point."); 
var que = readlineSync.question("DO YOU KNOW Rahul Modi? ");

function doYouReallyKnowMe(question,answer){
  //input of user
  var userAnswer = readlineSync.question();
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("You Absolutely Right!! You Got One Point");
    score = score + 1;
  }
  else{
    console.log("Sorry , You are Wrong '-'");
    score = score - 1;
  }
  console.log("Current Scores : ",score);
  console.log("---------------");
}

var question = [{
  question:"where do i live? ",
  answer:"ahmedabad"},
{
  question:"My favorite Superhero whould be? ",
  answer:"superman"
},
{
  question:"What is my favorite food? ",
  answer:"gujarati"
},
{
  question:"What is my favorite color? ",
  answer:"Black"
}
];

var questionaryWithOption = [{
  question:"where do i live? ",
  option1:"surat",
  option2:"baroda",
  option3:"ahmedabad",
 answer:"ahmedabad"},
{
  question:"My favourite Superhero whould be? ",
  option1:"batman",
  option2:"superman",
  option3:"ironMan",
  answer:"superman"
},
{
  question:"What is my favorite food? ",
  option1:"punjabi",
  option2:"gujarati",
  option3:"south Indian",
  answer:"gujarati"
}
];
if(que == "Yes"  || que == "yes"){
    for(var i=0;i<question.length;i++){
      var currQuestion = question[i];
      console.log("Q."+currQuestion.question);
      doYouReallyKnowMe(currQuestion.question,currQuestion.answer);
    }
}
else{
  console.log("Go through it !! ");
  for(var i=0;i<question.length;i++){
      var currQuestion = questionaryWithOption[i];
      var op1 = currQuestion.option1;
      var op2 = currQuestion.option2;
      var op3 = currQuestion.option3;
      console.log("Que."+currQuestion.question);
      console.log("1."+op1+"\n2."+op2+"\n3."+op3);
      
      doYouReallyKnowMe(currQuestion.question,currQuestion.answer);
    }
}

