//REQUEST FROM COMMAND LINE
//npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4
//npm run calculateExercises 2.5 1 0 2 0 3 0 2.5
//first byte is target
//second byte is starting byte of dailyHours array
//REQUEST FROM INTERNET
/*
{
  "daily_exercises": [1, 0, 2, 4.5, 0, 3, 1, 0, 4],
  "target": 2
}
{
  "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
  "target": 2.5
}
*/
//RESPONSE FROM COMMAND LINE
/*
{
  periodLength: 9,
  trainingDays: 6,
  success: false,
  rating: 2,
  ratingDescription: 'Not bad but could be better!',
  target: 2,
  average: 1.7222222222222223
}
//RESPONSE FROM COMMAND LINE
{
  periodLength: 7,
  trainingDays: 4,
  success: false,
  rating: 1,
  ratingDescription: "Bad!",
  target: 2.5,
  average: 1.2142857142857142
}
//RESPONSE FROM INTERNET
{
  "periodLength": 9,
  "trainingDays": 6,
  "success": false,
  "rating": 2,
  "ratingDescription": "Not bad but could be better!",
  "target": 2,
  "average": 1.7222222222222223
}
//RESPONSE FROM INTERNET
{
  "periodLength": 7,
  "trainingDays": 4,
  "success": false,
  "rating": 1,
  "ratingDescription": "Bad!",
  "target": 2.5,
  "average": 1.2142857142857142
}
*/


interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Training {
  dailyHours: Array<number>;
  target: number;
}


export const parseTRAINArguments = (target: number,  dailyHours: number[]): Training => {

  for(let i=0;i<dailyHours.length;i++){
    if(isNaN(Number(dailyHours[i]))){
      throw new Error('Provided values were not numbers!');
    }
  }

  /* Modulos operator and Remainder */
  /* for example 13 % 5 = 3 */
  /* 13 : 5 = 2 */
  /* 13 - (5 * 2) = 3 */
  /* 13 - (5 * 13/5) = 3 */

  /* i -> i % 7 -> Weekday */
  /* 0 -> 0     -> Monday */
  /* 1 -> 1     -> Tuesday */
  /* 2 -> 2     -> Wednesday */
  /* 3 -> 3     -> Thursday */
  /* 4 -> 4     -> Friday */
  /* 5 -> 5     -> Saturday */
  /* 6 -> 6     -> Sunday */
  /* 7 -> 0     -> Monday */
  /* 8 -> 1     -> Tuesday */
  /* 9 -> 2     -> Wednesday */

  console.log(`Working Days`);
  dailyHours.forEach((element,i) => {
    switch(i % 7){
      case 0 :
        console.log(`Monday: ${element}h`);
        break;
      case 1 :
        console.log(`Tuesday: ${element}h`);
        break;
      case 2:
        console.log(`Wednesday: ${element}h`);
        break;
      case 3:
        console.log(`Thursday: ${element}h`);
        break;
      case 4:
        console.log(`Friday: ${element}h`);
        break;
      case 5: 
        console.log(`Saturday: ${element}h`);
        break;
      case 6:
        console.log(`Sunday: ${element}h`);
        break;
      default: console.log('error');
    }

  });
  return {
    dailyHours : dailyHours,
    target : target
  };


};

export const calculateExercises = (dailyHours: number[], target: number): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((dailyHours) => dailyHours > 0).length;

  const average = dailyHours.reduce((prev, curr) => prev + curr) / dailyHours.length;
  const success = average >= target;
  const getRating = (average: number, target: number): number => {
    if (average < target * 0.8) return 1;
    else if (average < target) return 2;
    else if (average >= target) return 3;
    return 0;
  };

  const getRatingDescription = (rating: number): string => {
    if (rating === 1) 
      return "Bad";
    
    if (rating === 2) 
      return "Good";
    
    if (rating === 3) 
      return "Very Good";
    return "Rating out of range";
  };

  const rating = getRating(average, target);
  const ratingDescription = getRatingDescription(rating);

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

//remove next comments if you are testing the application directly from the command line without internet
/*
try {
  //const { dailyHours, target } = parseTRAINArguments(process.argv);
  
  let a = 0;
  const len = process.argv.length - 3;
  const dailyHours = [];

  for(a=0;a<len;a++) {
    dailyHours[a] = Number(process.argv[a+3]);
  }
  const target = Number(process.argv[2]);

  //Not belongs to this project - some own test stuff

  //take odd numbers (parittomat)
  //let dailyarray =  [ ...dailyHours ];
  //let testarray = dailyarray.filter((n) => n % 2 === 1);

  //take even numbers (parilliset)
  //let dailyarray =  [ ...dailyHours ];
  //let testarray = dailyarray.filter((n) => n % 2 === 0);

  //let dailyarray =  [ ...dailyHours ];
  //let testarray = dailyarray.filter((c, index) => {
  // return dailyarray.indexOf(c) !== index;
  //});

  //let dailyarray = dailyHours;
  //let testarray = dailyarray.filter((c, index) => {
  //return dailyarray.indexOf(c) === index;
  //});

  //let dailyarray = dailyHours;
  //let addarray = [5,6,7,8];
  //let testarray = dailyarray.concat(addarray);

  //let dailyarray = dailyHours;
  //let addarray = [5,6,7,8];
  //let testarray = [...dailyarray, ...addarray];

  //let testarray = dailyHours;
  //let addarray = [5,6,7,8];
  //var length = testarray.push(...addarray);
  //console.log('length', length);

  //let testarray = dailyHours.map(n => n * 2);
  //let testarray = dailyHours.map(n => n !== 0 ? n : 5);
  //let testarray = dailyHours.sort((firstItem, secondItem) => firstItem - secondItem);
  //let testarray = dailyHours.sort((firstItem, secondItem) => secondItem - firstItem);
  //let testarray = [...new Set(dailyHours)];
  //let testarray = dailyHours.filter(n => n === 0);
  //let testarray = dailyHours.find(n => n === 0);
  //let testarray = dailyHours.filter(n => n > 0);
  //let testarray = dailyHours;
  //console.log('testarray', testarray);

  console.log('target', target);
  console.log('dailyHours', dailyHours);

  console.log(calculateExercises(dailyHours, target));
}catch (error: unknown) {
  let errorMessage = 'Error happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
*/



