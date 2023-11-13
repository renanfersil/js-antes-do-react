/*
// Nullish Coalescing Operator

const idade = 0;

//0, '', [], false, undefined, null => falsy
//falsy => valores não validos quando se usa operadores ' ou ||'
//?? => null, undefined

document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');

// Objectos

const user = {
  name: 'Renan',
  nickname: 'pqd',
  idade: '26',
  address: {
    street: 'Rua Recife',
    number: 1387,
  },
};

//document.body.innerText = ('name' in user)
//document.body.innerText = ('nickname' in user)
//document.body.innerText = Object.keys(user)
//document.body.innerText = JSON.stringify(Object.values(user))
//document.body.innerText = JSON.stringify(Object.entries(user))

// Desestruturação

const { address, idade: age, nickname = 'pqd' } = user
document.body.innerText = JSON.stringify({ address, age, nickname })

function mostraIdade({ idade }) {
  return idade;
}

document.body.innerText = mostraIdade(user)

// Rest opeator

//const { name, idade, ...rest } = user;

//document.body.innerText = JSON.stringify(rest)

const array = [1, 2, 3, 4, 5];

const [first, second, ...rest] = array;

document.body.innerText = JSON.stringify({ first, second, rest })

//Short Syntax

const name = 'Renan';
const age = 26;

const user = {
  name,
  age,
};

document.body.innerText = JSON.stringify(user)


//Optional Chaining

const user = {
  name: 'Renan',
  nickname: 'pqd',
  age: 26,
  address: {
    street: 'Rua Recife',
    number: 1387,
    zip: {
      code: '21730090',
      city: 'Rio de Janeiro'
    },
    showFullAddress() {
      return 'ok';
    }
  },
};

const key = 'street';

document.body.innerText = user.address[key]
*/

// Métodos de Array

const array = [1, 2, 3, 4, 5];

//Opções para percorrer Array

//for (const i of array) {
//  document.body.innerText += i;
//}

//array.forEach(item => {
//  document.body.innerText += item;
//})

const novoArray = [];

array.forEach(item => {
  novoArray.push(item * 2);
})



//document.body.innerText = user