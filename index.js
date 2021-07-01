
var readlineSync = require('readline-sync');

var chalk = require("chalk");
function log(data) {
  console.log(data);
}
log(chalk.yellow("Welcome TO HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY QUIZ"));
log("---------------------------------------------------------");
log(" ");
log(" ");
log(chalk.blue("APPLICATION FOR HOGWARTS SCHOOL QUIZ"));
log(" ");
log(" ");

log(chalk.bgBlack("IN THIS QUIZ SHOULD BE (boy) OR (girl)"));
log(" ");

var question = ("Hii! May I know your gender? ");
var answer = ("boy");
var userGender = readlineSync.question(question);
if (userGender === answer) {
  log(chalk.cyan(" Welcome to Wizardry category"));
   log("---------------------------------------------------------");
} else {
  log(chalk.magentaBright("Welcome to  Witchcraft category"));
   log("---------------------------------------------------------");
}
log(" ");
log(" ");
log(chalk.bgGray("LAST PROCEDURE BEFORE STARTING QUIZ"));
log(" ");
var userName = readlineSync.question("May I know your name?  ===>  ");
 log("---------------------------------------------------------");
log(" ");
log(chalk.yellow("NOW YOU CAN BEGIN WITH QUIZ (ALL THE BEST FOR QUIZ) HOPE YOU WILL GIVE RIGHT ANSWERS)"));
log(" ");
log(chalk.bgBlack("Each question has (5 score)"));
 log("---------------------------------------------------------");
log(" ");
log(" ");

log(chalk.yellowBright("LEVEL 1 QUESTION ARE BASED ON HARRY POTTER"));
log(" ");
log(chalk.gray("LETS GOOOOO"));
log(" ");

score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    log(chalk.greenBright("WOW! conngratulations you are a true Hogwarts School quiz expert "));
    log(" ");
    log(chalk.green("ooh! current score is added by 5"));
    score = score + 5;
    log("---------------------------------------------------------");
    log(" ");
    log(" ");
  } else {
    log(chalk.redBright("Wrong answer you are not a true Hogwarts School quiz expert"));
    log(" ");
    log(chalk.red("Your current score is deducted by 5"));
    score = score - 5;
    log("---------------------------------------------------------");
    log(" ");
    log(" ");
    }
  }
  
var questionSetOne = [{
  question:"Where does Harry Potter opened the dragon's golden egg a)Under Water  b)Unde Hot Water c)under cold water -->   ",
  answer: "a"
}, {
  question:"Before his second year at Hogwarts, how do the Weasley's save Harry from the Dursley's house? a)A Portkey b)A Enchaned Broom c)A Flying Car d)Floo Power -->   ",
  answer: "c"
}, {
  question: "What type of dragon did Harry face in his first Tri-Wizard Tournament task? a)Swedish Short-Snout  b)Common Welsh Green c)Chinese Fireball d)Hungarian Horntail -->   ",
  answer: "c"
}, {
  question: "In the Philospher's Stone, what animal falls out of Christmas cracker Harry pulls? a)Hamsters  b)Dormice  c)White mice  d)Shrews -->   ",
  answer: "a"
}, {
  question:"If Harry Potter is not in Gryffindor, then he should be in which houses? a)Slytherin  b)Hufflepuff  c)Ravenclaw -->   ",
  answer: "a"
}]
for (var i=0; i < questionSetOne.length; i++) {
    var currentQuestion = questionSetOne[i];
    play(currentQuestion.question, currentQuestion.answer);
}

log(" ");
log("  ");
log("  ");

log(chalk.cyanBright("WELL DONE YOU HAVE PROCEED FOR LEVEL 2"));
log(chalk.cyanBright("UPCOMING QUIZ IS BASED ON PROF.DUMBLEDORE"));
log(" ");
log(chalk.gray("{LET'S BEGIN WITH QUIZ}"));
 log("---------------------------------------------------------");
log(" ");
log(" ");
var questionSetTwo = [{
  question: "What is Albus Dumbledore’s full name?  a)Albus Pericles Wolfgang Dumbledore  b)Albus Polonius Wilfred Brian Dumbledore  c)Albus Percival Wulfric Brian Dumbledore -->   ",
  answer: "c"
}, {
  question: "Which Horcrux does Dumbledore destroy? a)Slytherin's Locket  b)Hufflepuff's Cup  c)Riddle's Diary  d)Gaunt's Ring -->   ",
  answer: "d"
}, {
  question: "Dumbledore’s wand contains which magical substance?  a)Unicorn Tail Hair  b)Thestral Tail Hair  c)Dragon Heartstring  d)Phoenix Tail Feather -->   ",
  answer: "b"
}, {
  question:" What shape is the scar above Dumbledore’s left knee?  a) The Symbol Of The Deathly Hallows  b)A Crescent Moon  c)A Phoenix In Flight  d)A Map Of The London Underground -->   ",
  answer: "d"
}, {
  question:"Who Killed Dumbledore a)Snap  b)Peter Pettigrew  c)Voldemort -->   ",
  answer: "a"
}]
for (var i=0; i < questionSetOne.length; i++) {
    var currentQuestion = questionSetTwo[i];
    play(currentQuestion.question, currentQuestion.answer);
}
log(" ");
log(" ");
log(" ");


log(chalk.green("WELL DONE YOU HAVE PROCEEDED FOR LEVEL 3"));
log(chalk.green("UPCOMING QUIZ IS BASED ON Voldemort"));
log(" ");
log(chalk.gray("LET'S BEGIN WITH QUIZ"));
 log("---------------------------------------------------------");
log(" ");
log(" ");

var questionSetThree = [{
  question:"WHO Voldemort and Nagini met?  a)When Voldemort saw Nagini  b)When Nagini Turning Into Snake  c)When Voldemort Is Searching For A Pet -->   ",
  answer: "b"
}, {
  question:"From whom does Voldemort take his first and middle names?   a)His Father And Brother  b)His Father And Grandfather  c)Two Hogwarts Headmasters  d)His Grandfather And His Uncle -->   ",
  answer:"c"
}, {
  question: "In the Harry Potter books, which character speaks Voldemort’s name for the first time?  a)Ron Weasley  b)Rubeus Hagrid  c)Minerva MrGongall  d)Albus Dumbledore -->   ",
  answer:"d"
}, {
  question: "Lord Voldemort killed Gellert Grindelwald. True or false? a)Ture  b)False c)True and False -->   ",
  answer: "a"
}, {
  question: "Who was A Voldemort?  a)Merope Riddle  b)Mary Riddle  c)Thomas Riddle  d)Lord Voldemort -->   ",
  answer: "c"
}]
for (var i=0; i < questionSetThree.length; i++) {
    var currentQuestion = questionSetThree[i];
    play(currentQuestion.question, currentQuestion.answer);
}
log(chalk.yellowBright("Your final Score is Tada na na na = " + score));
log(" ");
log(" ");
log(chalk.yellow("Check out the high score in this list = "));
log(" ");
log(" ");
var highScore = [
  {
    name: "Shantam",
    score: 50,
  },
  {
    name: "Shivam",
    score: 60,
  }
]
for (var i=0; i < highScore.length; i++) {
  log(highScore[i].name + " ---> " + highScore[i].score);
  log("---------------------------------------------------------");
  log(" ");
}

log(chalk.bgBlue("THIS QUIZ FOR POTTER FANS. I HOPE YOU ALL ENJOYED A LOT"));
log(" ")

log(chalk.green("THANK YOU FOR JOINING OUR HOGWARTS SCHOOL QUIZ"));

log(chalk.green('LOVE SLYTHERIN'));
log(chalk.greenBright("Avada Kedaura"));