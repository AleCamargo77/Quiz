export default class ResponseModel {
  #valor: string;
  #certa: boolean;
  #revelada: boolean;

  constructor(valor: string, certa: boolean, revelada: false) {
    this.#valor = valor;
    this.#certa = certa;
    this.#revelada = revelada;
  }

  static isValid(valor: string) {
    return new ResponseModel(valor, true);
  }

  static notValid(valor: string) {
    return new ResponseModel(valor, false);
  }

  get valor() {
    return this.#valor;
  }

  get certa() {
    return this.#certa;
  }

  get revelada() {
    return this.#revelada;
  }

  reveal() {
    return new ResponseModel(this.#valor, this.#certa, true);
  }

  toObject() {
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada,
    };
  }
}
