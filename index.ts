import express from 'express';
import { calculateBmi} from "./bmiCalculator";
import {parseTRAINArguments, calculateExercises} from "./exerciseCalculator";
const app = express();

app.use(express.json());

app.get('/hello', (_req,res) => {
  res.send('Hello Full Stack!');
});

app.get("/bmi", (req, res) => {
  const result = Object.values(req.query);
  console.log(result);
  const height = result[0];
  const weight = result[1];

  let bmi="";
  if(!isNaN(Number(height)) && !isNaN(Number(weight))){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bmi = 
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	calculateBmi(Number(height), Number(weight));
  }else{
    res.status(400).send({ error: "malformatted parameters" });
  }  

  if (!weight || !height) {
    res.status(400).send({ error: "malformatted parameters - no content" });
  }

  res.send({ height, weight, bmi });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target }= req.body;


  if (!daily_exercises || !target) {
    res.status(400).send({ error: "malformatted parameters" });
  } 
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = parseTRAINArguments(target, daily_exercises);
    res.send(calculateExercises(result.dailyHours, result.target));
  } catch (error) {
    res.status(400).send({ error:"Something went wrong" });
  }
});


app.post('/bmi', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { height, weight }= req.body;

  if (!height || !weight) {
    res.status(400).send({ error: "malformatted parameters" });
  } 
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = 
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	calculateBmi(height, weight);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const returnObject = { height: height, weight: weight, bmi: result };
    res.send(returnObject);
  } catch (error) {
    res.status(400).send({ error:"Something went wrong" });
  }
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});