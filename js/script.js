//1. click on startBtn
//need to create function that fires when startBtn clicked

var startBtn = document.querySelector("#start");
var count = localStorage.getItem("count");


startBtn.addEventListener("click", function startGame() {
renderQuestion();
});



//need to create an objarray to store, question options, answer?

var questionIndex=2;
var trivia = 
{
  questions:['What worm eater finds its food by directing its farts toward dirt?','What species of birds is susceptible to contagious yawning?', 'Jackass, Rock Hopper, and Emperor are all types of what?', 
  'A group of ravens is called what?', 'The shag belongs to what bird family?'],
  choices:[
            ['Albatross','Passerine','Bassian thrush', 'Swift'],
            ['Budgie, or common parakeet','Pelican','Snowy Egret','Kingfisher'],
            ['Woodpeckers', 'Vultures', 'Penguins','Owls'],
            ['Colony', 'Parliament', 'Brood','Unkindness'],
            ['Hummingbird', 'Cormorant', 'Crane','Lark']
          ],
  answers:['Bassian thrush','Budgie, or common parakeet', 'Penguins', 'Unkindness', 'Cormorant' ],
}




//need a function to display the card
//also need do do the following

function renderQuestion(){
  console.log("renderQuestion")

  //trivia object
console.log(trivia)
//question
console.log(trivia.questions[questionIndex])
document.querySelector("#questions").textContent = (questionIndex+1)+ ". "+trivia.questions[questionIndex];
//choices
// console.log(trivia.choices[questionIndex][0])
// console.log(trivia.choices[questionIndex][1])
// console.log(trivia.choices[questionIndex][2])
// console.log(trivia.choices[questionIndex][3])
for(var i=0;i<trivia.choices[questionIndex].length;i++){
  console.log(trivia.choices[questionIndex][i]);
  var btnid="#"+questionIndex;
  //#0
  //need to add data to btn
  document.querySelector("#0").setAttribute("text",trivia.choices[questionIndex][i]);
}

//answer
console.log(trivia.answers[questionIndex])
document.querySelector("#answer").textContent =  trivia.answers[questionIndex];
}

//2. prompt with quest1
    //start time
    //list choices
    //when you click on any answers you will prompt to the next question
        //click on a correct choice score goes up by 1 correct point
        //what happens wrong
        //reduce time by 10sec

//function to check when you are done, or you can add this check before rendering card
//3. how do i know when i am done?
    //if time is up
    //if you are done answering 5 questions / done answering questions

//make a function to display when game is over.. and does the following below
//4. what do i do when the game is over
    //you can ask for username and score
    // save user initials
    //display all users scores with initals

//***LATER SET UP TIME STUFF */
//***LATER LOCAL STORAGE */


// Set the body to a variable
var body = document.body;

// Create all necessary body elements by declaring variables
var h1El = document.createElement("h1");
var h3El = document.createElement("h3");
var infoEl = document.createElement("div");
// var imgEl = document.createElement("img");
var startBtn = document.createElement("button");


var q1El = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var q2El = document.createElement("div");
var list2El = document.createElement("ol");
var li21 = document.createElement("li");
var li22 = document.createElement("li");
var li23 = document.createElement("li");
var li24 = document.createElement("li");

//will need to set up 3 more questions with 4 potential answers

// Store our li elements in a variable.  Will need to do for 5 questions
var listItems = document.getElementsByTagName("li");
var listItemsTwo = document.getElementsByTagName("li");
// var listItemsThree
// var listItemsFour
// var listItemsFive



// //set up timer variables
// var secondsDisplay = document.querySelector("#seconds");

// //zero out the seconds, though maybe need to start the totalSeconds at 60?
// var totalSeconds = 0;
// var secondsElapsed = 0;
// var interval;
// var secondsLeft = (totalSeconds - secondsElapsed);

// // This function is where the timer runs
// // This increments the secondsElapsed var
// function startTimer() {
//     setTime();
//     //    
//       /* the "interval" variable here using "setInterval()" begins the recurring increment of the 
//          secondsElapsed variable which is used to check if the time is up */
//         interval = setInterval(function() {
//           secondsElapsed++;
//           //So renderTime() is called here once every second.
//           renderTime();
//         }, 1000);
//     }

//Need to set up the conditional if/else for the timer if wrong answer and subtract 10 seconds

// Set the text content of relevant elements
h1El.textContent = "Bird Quiz Challenge";
h3El.textContent = "Try to answer the following bird-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
buttonEl.textContent = "Start Quiz";

q1El.textContent = "What worm eater finds its food by directing its farts toward dirt?";
li1.textContent = "Albatross";
li2.textContent = "Passerine";
li3.textContent = "Bassian thrush";
li4.textContent = "Swift";

q2El.textContent = "What species of birds is susceptible to contagious yawning?";
li21.textContent = "The budgie, or common parakeet";
li22.textContent = "Passerine";
li23.textContent = "Bassian thrush";
li24.textContent = "Swift";

// Add 3 more questions with 4 potential answers


// Append all of our elements
body.appendChild(h1El);
body.appendChild(h3El);
body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
infoEl.appendChild(buttonEl);
body.appendChild(q1El);
body.appendChild(q2El);

q1El.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

q2El.appendChild(list2El);
list2El.appendChild(li21);
list2El.appendChild(li22);
list2El.appendChild(li23);
list2El.appendChild(li24);


// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; font-family:arial; padding:20px;");
h3El.setAttribute("style", "margin:auto; width:50%; text-align:center; font-family:arial; padding:10px;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center; font-family:arial;");
// imgEl.setAttribute("src", "assets/gulls_200_250.jpg");
// imgEl.setAttribute("height", 250);
// imgEl.setAttribute("width", 200);
buttonEl.setAttribute("style", "font-size:25px; text-align:center; font-family:arial;");


q1El.setAttribute("style", "font-size:20px; font-family:arial;");
listEl.setAttribute("style", "background:#333333; padding:20px;");
listItems[0].setAttribute("style", "color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItems[1].setAttribute("style", "color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItems[2].setAttribute("style", "color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItems[3].setAttribute("style", "color:white; background: #999999; padding: 5px; margin-left: 35px;");

q2El.setAttribute("style", "font-size:20px; font-family:arial;");
list2El.setAttribute("style", "background:#333333; padding:20px;");
listItemsTwo[0].setAttribute("style", "color:white; background: #666666; padding: 5px; margin-left: 35px;");
listItemsTwo[1].setAttribute("style", "color:white; background: #777777; padding: 5px; margin-left: 35px;");
listItemsTwo[2].setAttribute("style", "color:white; background: #888888; padding: 5px; margin-left: 35px;");
listItemsTwo[3].setAttribute("style", "color:white; background: #999999; padding: 5px; margin-left: 35px;");


//Need to set up eventListener onClick for button

startBtn.addEventListener("click", startTimer);

//Need to set up initials and score that is stored in global memory and a way for user to input with a prompt