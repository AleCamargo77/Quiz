import questions from "../bancoDeQuestoes";

export default function handler(req: any, res: any) {
  res.status(questions[0]).json;
}
