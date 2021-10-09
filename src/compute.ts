import { Game } from "./types";

export function compute(game: Game): number {
  let total: number = 0;

  for (let i = 0; i < game.length; i++) {
    let frame = game[i];
    let nextFrame = game[i+1];
    let thirdFrame = game[i+2];
    
    if(i === 9){//Last frame
      total += frame[0]+frame[1]+frame[2];
    }else{
      if(frame[0] === 10){//Strike
        if(nextFrame[0] === 10){//Double
          if(i+2 <= 9 && thirdFrame[0] === 10){//Turkey +
            total += 30;
          }else{
            total += i+2 <= 9 ? 20+thirdFrame[0] : 10+nextFrame[0]+nextFrame[1];
          }
        }else{
          total += (10+nextFrame[0]+nextFrame[1])
        }
      }else{//Spare or no spare
        total += frame[0]+frame[1] === 10 ? 10+nextFrame[0] : frame[0]+frame[1];
      }
    }
  }
  return total;
}