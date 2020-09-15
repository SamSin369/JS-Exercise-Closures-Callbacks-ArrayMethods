// ⭐️ Example Challenge START ⭐️

// /**
//  * ### Challenge `processFirstItem`
//  * 
//  * @instructions
//  * Implement a higher-order function called `processFirstItem`.
//  * It takes two arguments:
//  * @param stringList an array of strings.
//  * @param callback function that takes a string as its argument.
//  * @returns the result of invoking `callback` with the FIRST element in `stringList`.
//  * 
//  * Example of usage of this higher-order function:
//  * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
//  * should return 'foofoo'.
// */
// function processFirstItem(stringList, callback) {
//   return callback(stringList[0])
// }

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 is adding 1 to count when it is called by using let count = 0 which is located in the function scope and is using local function memory.
 * 2. Which of the two uses a closure? How can you tell?
 * counter 2 is using a closure because the data it need to run is in the parent element in this case the global window of javascript.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *if we are going to use the count variable thematically throughout our code then it is superior to use it as a global variable, hwoever if we are using it only in the context and scope of the function then defining and storing it inside the function makes the most sense.
*/

// counter1 code
// function counterMaker() {
//   let count = 0;
//   return function counter() {
//     count++;
//   }
// }

// const counter1 = counterMaker();

// // counter2 code
// let count = 0;

// function counter2() {
//   return count++;
// }


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

     
 return  (Math.round(Math.random()) + Math.round(Math.random()))
    
}
 


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


// function finalScore(numInnings, cbInning){
//   let homeTeam = 0;
//   let awayTeam = 0;
//   for(i = 0; i < numInnings; i ++) {
//     homeTeam  += cbInning()
    
//   }
//   for(i = 0; i < numInnings; i ++) {
//     awayTeam  += cbInning()
    
//   }
  
//   return {
//     home: homeTeam, 
//     away: awayTeam,
//   }

// }
// console.log(finalScore(9, inning))

  









 


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

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


function scoreboard(numInnings, cbInning){
  let homeTeam = 0;
  let awayTeam = 0;
  let totalInnings = 0;
  let updatingHome = [];
  let updatingAway = [];
  let inningArr = [];
 
  for(i = 0; i < numInnings; i ++) {
    totalInnings ++
    homeTeam  += cbInning()
    inningArr.unshift(totalInnings)
    updatingHome.unshift(homeTeam)
   
    
  }
  for(i = 0; i < numInnings; i ++) {
    totalInnings ++
    awayTeam  += cbInning()
    updatingAway.unshift(awayTeam)
    console.log(awayTeam)
    
  }
  
  
   for(i = 0; i < numInnings; i ++) {
     console.log(`${inningArr[i]}th inning: ${awayTeam} - ${homeTeam}`)
    
   }
   return 
              

}
console.log(scoreboard(9, inning))


