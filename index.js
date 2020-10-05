// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️ //


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 

 * 1. What is the difference between counter1 and counter2?
 
      //  Counter1 returns a function. It is a counter "maker". You could use this function to create
          multiple counters. Counter2 simply returns the value of count from global scope, incremented
          by 1.
 


/* 2. Which of the two uses a closure? How can you tell?

      //  Counter1 uses a closure. It encloses a function. It returns a function, not just a value.

 

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *    //  Counter1 would be preferable if we wanted to create multiple counters. Counter2 would be better if we
 *        only needed to count one thing.
 *
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}
const counter1 = counterMaker();


// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning.
This should be a whole number between 0 and 2. */

        function inning(inning){

            let score = Math.floor(Math.random() * 3);
        }
        console.log(inning);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning`
(from above) and a number of innings and and returns the final score of the game in the form
of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

        function inning(inning){

          let score = Math.floor(Math.random() * 3);
          return score;
        }
        console.log(inning);

        function finalScore(cb,innings) {

        let final = {
          "Home": 0,
          "Away": 0
        }
        for (let inn = 0; inn < innings; inn++) {
          final.Home += inning();
          final.Away += inning();
        }
        return final
        }
        console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

        function inning(inning){

          let score = Math.floor(Math.random() * 3);
          return score;
        }

        function scoreboard(getInningScore,inning,innings) {
          
          let final = {
            "Home": 0,
            "Away": 0
          }
          for (let inn = 0; inn < innings; inn++) {
            final.Home += inning();
            final.Away += inning();

            getInningScore(inn, final);
          }
          return final

          console.log(finalScore(inning, 9));
        }

        function newScoreBoard(inning, final) {
          if (inning === 0) {
            console.log(
                (inning + 1) + "st inning: " + final.Away + " - " + final.Home
            );
          }
          else if (inning === 1) {
            console.log(
                (inning + 1) + "nd inning: " + final.Away + " - " + final.Home
            );
          }
          else if (inning === 2) {
            console.log(
                (inning + 1) + "rd inning: " + final.Away + " - " + final.Home
            );
          }
          else {
            console.log(
                (inning + 1) + "th inning: " + final.Away + " - " + final.Home
            );
          }
        };
        scoreboard(newScoreBoard, inning, 9);
