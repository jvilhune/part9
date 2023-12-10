//C:\Users\PC\part9>node -v
//v18.17.0
//C:\Users\PC\part9>npm -v
//9.8.1
//npm install --location=global ts-node typescript
//npm install --save-dev ts-node typescript
//package.json
//"scripts": {
//  "ts-node": "ts-node",
//  "multiply": "ts-node multiplier.ts",
//  "calculate": "ts-node calculator.ts",
//},
//npm run ts-node file.ts -- -s --someoption
//npm run ts-node -- multipliercalc.ts
//npm install --save-dev @types/node
//npm run multiply 5 2
  interface MultiplyValues{
    value1: number;
    value2: number;
  } 
  const parseArguments = (args: string[]): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    console.log('args.length', args.length);
    console.log('args[0]', args[0]);
    console.log('args[1]', args[1]);
    console.log('args[2]', args[2]);
    console.log('args[3]', args[3]);
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      };
    } else {
      throw new Error('Provided values were not numbers!');
    }
  };
  
  const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
  };  
  try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }