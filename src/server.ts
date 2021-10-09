import express from "express";
import { compute } from "./compute";
export const app = express();

app.use(express.json());

app.post("/compute", (request, response) => {
  const game = request.body.game;
  // TODO: Validate input
  if(game.length !== 10 ){
    response.sendStatus(400);
  }
  game.flat().forEach((e: number) => {
        if(e < 0 || e > 10 || typeof e !== "number")  
          response.sendStatus(400);
  }); 

  const score = compute(game);
  // TODO: Return response
  response.status(200).send({score: score});
});
