import ResponseModel from "./response";

export default class QuestionModel {
  #id: number;
  #enunciado: string;
  #respostas: ResponseModel[];
  #acertou: boolean;
  //respondida: boolean

  constructor(
    id: number,
    enunciado: string,
    respostas: ResponseModel[],
    acertou = false
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get respostas() {
    return this.#respostas;
  }

  get acertou() {
    return this.#acertou;
  }

  get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }
}