"use strict";
//string
var nome = 'Joao';
console.log(nome);
// nome = 28;
//numbers
var idade = 27;
idade = 27.5;
// idade = 'ANA'
console.log(idade);
//boolean
var pussuiHobbbies = false;
// pussuiHobbbies  = 1;
console.log(pussuiHobbbies);
//tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'Idade é 27'
// se nao definir o tipo de variavel, vai ser automaticamente any
//array
var hobbies = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200];
console.log(hobbies);
//tupla
var endereco = ["Av principal", 99, 10];
console.log(endereco);
// endereco = ["av2", 200];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Amarelo);
console.log(Cor.Vermelho);
// any 
var carro = "BMW";
console.log(carro);
carro = { marca: 'BMW', ano: 2009 };
console.log(carro);
// funções
function retornaMeuNome() {
    // return minhaIdade;
    return "Carlos";
}
;
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.7, 5));
// tipo funcao
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
// calculo = 1;
console.log(calculo(5, 6));
// objetos
var usuario = {
    nome: 'Carlos',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Carlos',
};
console.log(usuario);
var funcionario;
funcionario = {
    supervisores: ['Carlos', 'Andrezza'],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return "ponto normal";
        }
        else {
            return "fora do ponto";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(10));
console.log(funcionario.baterPonto(5));
// console.log(funcionario.baterPonto('teste'))
var funcionario2;
funcionario = {
    supervisores: ['Carlos', 'Andrezza'],
    baterPonto: function (hora) {
        if (hora <= 8) {
            return "ponto normal";
        }
        else {
            return "fora do ponto";
        }
    }
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '11';
console.log("Minha nota \u00E9 " + nota);
// nota = true
// console.log(`Minha nota é ${nota}`);
//Checando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log("\u00E9 um valor number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    console.log('teste');
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
// Null types
var altura = 12;
// altura = null;
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: "Fulano",
    tel1: "9854726",
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null; // recebe tipo any!
podeSerNulo = 12;
podeSerNulo = 'abc';
console.log(typeof podeSerNulo);
var conta = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: conta,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
