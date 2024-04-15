import { PossibleAnswer } from "./answer.model";

export interface Question {
  name: string;
  possibleAnswers: PossibleAnswer[];
}