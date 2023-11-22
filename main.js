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


//Metódos mais importantes, map, filter, every, some, find, findIndex, reduce

//map

const array = [1, 2, 3, 4, 5];

//Opções para percorrer Array

// for (const i of array) {
//  document.body.innerText += i;
// }

//  const novoArray = [];

//  array.forEach(item => {
//    novoArray.push(item * 2);
//  })

const novoArray = array.map(item => {
  if (item % 2 === 0) {
    return item * 10;
  }

  return item;
})


//filter

const array = [1, 2, 3, 4, 5];

const novoArray = array
  .filter(item => item % 2 !== 0)
  .map(item => item * 10)


//every

const array = [1, 2, 3, 4, 5];

const TodosItensSaoNumeros = array.every(item => {
  return typeof item === 'number';
});


//some

const array = [1, 2, 3, 4, 5];

const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item !== 'number';
})


//find 

const array = [1, 2, 3, 4, 5];

const par = array.find(item => item % 2 === 0);

//findIndex

const array = [1, 2, 3, 4, 5];

const par = array.findIndex(item => item % 2 === 0);


//reduce

const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma)

//Template Literals

const name = 'Renan';
const message = `Bem-vindo, ${name ? name : 'visitante'}`;

document.body.innerText = message

//Promises
//.the/.cath

const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

somaDoisNumeros(1, 3) 
  .then(soma => {
    document.body.innerText = soma
  });
  */sw