var  contestantCount, database, quiz, question, contestant;
var gameState = 0
var contestantCount;
var allContestants;
var answer;


function setup(){
  canvas = createCanvas(850,400);
  //database = FireBase.database();
  quiz = new Quiz();
  quiz.start();

}


function draw(){
  background("pink");
  if(contestantCount === 4){
    Quiz.update(1)
  }
  if(contestantCount === 1){
    clear();
    Quiz.play();
  }

  
}
