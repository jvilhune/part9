//C:\Users\PC\part9>node -v
//v18.17.0
//C:\Users\PC\part9>npm -v
//9.8.1
//npm install --location=global ts-node typescript
//npm install --save-dev ts-node typescript
//package.json
//"scripts": {
//  "ts-node": "ts-node"
//},
//npm run ts-node file.ts -- -s --someoption
//npm run ts-node -- multipliercalc.ts
//npm install --save-dev @types/node

const multiplicator = (a, b, printText) => {
  console.log(printText,  a * b);
};
multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');


type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation) : number => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
};
try {
  console.log(calculator(1, 0 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

