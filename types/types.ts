//string
let nome: string = 'Joao';
console.log(nome);

// nome = 28;

//numbers
let idade: number = 27;
idade = 27.5;
// idade = 'ANA'

console.log(idade);

//boolean
let pussuiHobbbies: boolean = false;
// pussuiHobbbies  = 1;
console.log(pussuiHobbbies)

//tipos explicitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade)
// minhaIdade = 'Idade é 27'

// se nao definir o tipo de variavel, vai ser automaticamente any

//array
let hobbies: any[] = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200];

console.log(hobbies);

//tupla
let endereco: [string, number, number] = ["Av principal", 99, 10]
console.log(endereco)

// endereco = ["av2", 200];

// enums
enum Cor {
  Cinza, //0
  Verde = 100, //1
  Azul = 2, //2
  Laranja, //3
  Amarelo, //4
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;

console.log(minhaCor);

console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Amarelo)
console.log(Cor.Vermelho)

// any 
let carro: any = "BMW"
console.log(carro);

carro = { marca: 'BMW', ano: 2009 }
console.log(carro);

// funções
function retornaMeuNome(): string{
  // return minhaIdade;
  return "Carlos";
};

console.log(retornaMeuNome());

function digaOi(): void {
  console.log('Oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2.7, 5))

// tipo funcao

let calculo: (numA: number, numB: number) => number;
// calculo = digaOi
// calculo()

calculo = multiplicar
// calculo = 1;
console.log(calculo(5,6))

// objetos
let usuario: {nome: string, idade: number} = {
  nome: 'Carlos',
  idade: 27
}

console.log(usuario)

usuario = {
  idade: 31,
  nome: 'Carlos',
}

console.log(usuario)

// Desafio
/* 
  Criar um objeto funcionario com :
    - Array de strings com os nomes dos supervisores
    - Função de bater o ponto que recebe a hora (numero), e retorna uma string
      -> ponto normal (<=8)
      -> fora do ponto (> 8)

*/

// Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string, 
}

let funcionario: Funcionario;

funcionario = {
  supervisores: ['Carlos', 'Andrezza'],
  baterPonto: (hora: number): string => {
    if(hora <=8){
      return "ponto normal";
    } else {
      return "fora do ponto";
    }
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(10))
console.log(funcionario.baterPonto(5))
// console.log(funcionario.baterPonto('teste'))

let funcionario2: Funcionario;

funcionario = {
  supervisores: ['Carlos', 'Andrezza'],
  baterPonto: (hora: number): string => {
    if(hora <=8){
      return "ponto normal";
    } else {
      return "fora do ponto";
    }
  }
}


// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);

nota = '11';
console.log(`Minha nota é ${nota}`);

// nota = true
// console.log(`Minha nota é ${nota}`);


//Checando tipos
let valor = 30

if (typeof valor === "number") {
  console.log(`é um valor number`)
} else {
  console.log( typeof valor)
}

// never
function falha(msg: string): never {
  
  console.log('teste');
  throw new Error(msg);

}

const produto = {
  nome: 'Sabão',
  preco: 10,
  validarProduto(){
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome!');
    }
    if (this.preco <= 0) {
      falha('Preço inválido!');
    }
  }
}

produto.validarProduto();


// Null types
let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null// vira opcional
}

const contato1: Contato = {
  nome: "Fulano",
  tel1: "9854726",
  tel2: null,
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null; // recebe tipo any!
podeSerNulo = 12
podeSerNulo = 'abc'

console.log(typeof podeSerNulo)

//DESAFIO
// Transformar codigo JS em TS

// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor) {
//       this.saldo += valor
//   }
// }

// let correntista2 = {
//   nome: 'Ana Silva',
//   contaBancaria: contaBancaria,
//   contatos: ['34567890', '98765432']
// }

// correntista2.contaBancaria.depositar(3000)
// console.log(correntista2)

// SOLUCAO
type ContaBancaria  = {
  saldo: number,
  depositar: (valor: number) => void
}

let conta: ContaBancaria = {
  saldo: 3456,
  depositar(valor){
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: conta,
  contatos: ['34567890', '98765432']
} 

correntista.contaBancaria.depositar(3000)
console.log(correntista)
