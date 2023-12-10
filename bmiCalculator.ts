//REQUEST FROM COMMAND LINE
//npm run bmiCalculator 175 70
//REQUEST FROM INTERNET
/*
{
  "weight": 72,
  "height": 180
}
//REQUEST FROM INTERNET
//GET http://localhost:3003/bmi?height=175&weight=70
*/
//RESPONSE FROM COMMAND LINE
/*
Height 175
Weight 70
Normal range
*/
//RESPONSE FROM INTERNET
/*
{
  "height": 180,
  "weight": 72,
  "bmi": "Normal range"
}
*/
//RESPONSE FROM INTERNET
/*
{
  "height": "175",
  "weight": "70",
  "bmi": "Normal range"
}
*/

//remove the comments if you are testing the application directly from the command line without internet
/*
interface BMI {
  height: number
  weight: number
}

const parseBMIArguments = (args: string[]): BMI => {

    console.log('args.length', args.length);
    console.log('args[0]', args[0]);
    console.log('args[1]', args[1]);
    console.log('args[2]', args[2]);
    console.log('args[3]', args[3]);


    console.log('process.argv.length', process.argv.length);
    console.log('process.argv[0]', process.argv[0]);
    console.log('process.argv[1]', process.argv[1]);
    console.log('process.argv[2]', process.argv[2]);
    console.log('process.argv[3]', process.argv[3]);


  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const calculateBmi: any = (height: number, weight: number): string => {

  /* For example 180 kg 175 cm */
  /* 80 : (1.75 * 1.75) = 80 : 3.06 = 26.1 */

  const BMI = weight / (height / 100) ** 2;
  //const BMI = weight / ( (height / 100) * (height / 100) );
  console.log('BMI', BMI);
  console.log(`Height ${height} \nWeight ${weight}`);
  if (BMI < 16.0) {
    return "Underweight - Severe thinness";
  } else if (BMI < 16.9) {
    return "Underweight - Moderate thinness";
  } else if (BMI < 18.4) {
    return "Underweight - Mild thinness";
  } else if (BMI < 24.9) {
    return "Normal range";
  } else if (BMI < 29.9) {
    return "Overweight - Pre-obese";
  } else if (BMI < 34.9) {
    return "Obese Class I";
  } else if (BMI < 39.9) {
    return "Obese Class II";
  } else if (BMI > 40) {
    return "Obese Class III";
  } else {
    return "False";
  }

};


//remove the comments if you are testing the application directly from the command line without internet
/*
  try {
    const { height, weight } = parseBMIArguments(process.argv)
    console.log(calculateBmi(height, weight))
  } catch (error: unknown) {
    let errorMessage = 'Error happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message
    }
    console.log(errorMessage)
  }
*/
