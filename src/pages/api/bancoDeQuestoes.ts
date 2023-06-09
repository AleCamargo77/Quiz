import QuestionModel from "../../../model/question";
import ResponseModel from "../../../model/response";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Em que ano o Palmeiras foi fundado?", [
    ResponseModel.notValid("1 de setembro de 1910"),
    ResponseModel.notValid("14 de abril de 1912"),
    ResponseModel.notValid("25 de janeiro de 1930"),
    ResponseModel.isValid("26 de agosto de 1914."),
  ]),
  new QuestionModel(
    202,
    "Quem é o maior artilheiro da história do Palmeiras?",
    [
      ResponseModel.notValid("Evair"),
      ResponseModel.notValid("Dudu"),
      ResponseModel.notValid("Ademir da Guia"),
      ResponseModel.isValid("Heitor"),
    ]
  ),
  new QuestionModel(
    203,
    "Em que ano o Palmeiras conquistou a Tríplice Coroa (Campeonato Paulista, Copa do Brasil e Campeonato Brasileiro)? ",
    [
      ResponseModel.notValid("2022"),
      ResponseModel.notValid("2016"),
      ResponseModel.notValid("2018"),
      ResponseModel.isValid("2020"),
    ]
  ),
  new QuestionModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      ResponseModel.notValid("Equilátero"),
      ResponseModel.notValid("Isóceles"),
      ResponseModel.notValid("Trapézio"),
      ResponseModel.isValid("Escaleno"),
    ]
  ),
  new QuestionModel(205, "Quem compôs o Hino da Independência?", [
    ResponseModel.notValid("Castro Alves"),
    ResponseModel.notValid("Manuel Bandeira"),
    ResponseModel.notValid("Carldos Gomes"),
    ResponseModel.isValid("Dom Pedro I"),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    ResponseModel.notValid("Perder"),
    ResponseModel.notValid("Fracassar"),
    ResponseModel.notValid("Desprezar"),
    ResponseModel.isValid("Conseguir"),
  ]),
  new QuestionModel(207, "Em que país nasceu Carmen Miranda?", [
    ResponseModel.notValid("Argentina"),
    ResponseModel.notValid("Espanha"),
    ResponseModel.notValid("Brasil"),
    ResponseModel.isValid("Portugal"),
  ]),
  new QuestionModel(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      ResponseModel.notValid("Costa e Silva"),
      ResponseModel.notValid("Emílio Médici"),
      ResponseModel.notValid("Ernesto Geisel"),
      ResponseModel.isValid("João Figueiredo"),
    ]
  ),
  new QuestionModel(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      ResponseModel.notValid("Ás"),
      ResponseModel.notValid("Nove"),
      ResponseModel.notValid("Rei"),
      ResponseModel.isValid("Valete"),
    ]
  ),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    ResponseModel.notValid("Vela"),
    ResponseModel.notValid("Vento"),
    ResponseModel.notValid("Vênia"),
    ResponseModel.isValid("Veia"),
  ]),
  new QuestionModel(211, "Que nome se dá à purificação por meio da água?", [
    ResponseModel.notValid("Abrupção"),
    ResponseModel.notValid("Abolição"),
    ResponseModel.notValid("Abnegação"),
    ResponseModel.isValid("Ablução"),
  ]),
  new QuestionModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      ResponseModel.notValid("Monte Branco"),
      ResponseModel.notValid("Monte Fuji"),
      ResponseModel.notValid("Monte Carlo"),
      ResponseModel.isValid("Monte Everest"),
    ]
  ),
  new QuestionModel(213, "Em que parte do corpo se encontra a epiglote?", [
    ResponseModel.notValid("Estômago"),
    ResponseModel.notValid("Pâncreas"),
    ResponseModel.notValid("Rim"),
    ResponseModel.isValid("Pescoço"),
  ]),
  new QuestionModel(214, "A compensação por perda é chamada de...", [
    ResponseModel.notValid("Déficit"),
    ResponseModel.notValid("Indexação"),
    ResponseModel.notValid("Indébito"),
    ResponseModel.isValid("Indenização"),
  ]),
  new QuestionModel(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      ResponseModel.notValid("Cuca"),
      ResponseModel.notValid("Curupira"),
      ResponseModel.notValid("Boitatá"),
      ResponseModel.isValid("Saci-pererê"),
    ]
  ),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    ResponseModel.notValid("Marechal Deodoro"),
    ResponseModel.notValid("Barão de Mauá"),
    ResponseModel.notValid("Marquês de Pombal"),
    ResponseModel.isValid("Duque de Caxias"),
  ]),
];

export default questions;
