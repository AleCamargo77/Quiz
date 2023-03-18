import questions from "../bancoDeQuestoes";
import { random } from "functions/arrays";

export default (req: any, res: any) => {
  const ids = questions.map((question) => question.id);
  res.status(200).json(random(ids));
};
