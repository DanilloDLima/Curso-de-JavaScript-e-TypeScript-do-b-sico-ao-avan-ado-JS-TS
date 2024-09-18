const numeros = [5, 50, 80,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27]
const pessoas = [
    {nome: "Danillo", idade: 25},
    {nome: "Daniel", idade: 30},
    {nome: "Diego", idade: 35},
    {nome: "Danubia", idade: 40},
    {nome: "Dani", idade: 52}
]

//retorna núumeros maior que 10
const numerosFiltrados = numeros.filter(numero => 
    numero > 10 ? numero: null) // ou => numero > 10
console.log(...numerosFiltrados)

//retornar as pessoas que tem o nome com 5 letras ou mais
//retornar as pessoas com mais de 50 anos
//retornar as pessoas cujo nome termina com a

const pessoasFiltrados = pessoas
    .filter(pessoa => pessoa.nome.length > 5)
    .map(pessoa => pessoa.nome)

const pessoasFiltrados2 = pessoas
    .filter(pessoa => pessoa.idade > 50)
    .map(pessoa => pessoa.nome)

const pessoasFiltrados3 = pessoas
    .filter(pessoa => pessoa.nome.toLocaleLowerCase().endsWith('a'))
    .map(pessoa => pessoa.nome)

console.log(`${pessoasFiltrados}\n${pessoasFiltrados2}\n${pessoasFiltrados3}`)

//dobre os números
const numerosDobrados = numeros.map(num => num * 2)
console.log(numerosDobrados)

//Para cada elemento :
//Retorne uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const retornarString = pessoas.map(obj => obj.nome)
console.log(retornarString)

const removerChaveNome = pessoas.map(obj => ({idade: obj.idade})) //ou delete obj.nome
console.log(removerChaveNome)

const comIds = pessoas.map((obj, indice) =>{
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj
})
console.log(comIds)

//reduce
//some todos os numeros
//retorne um array com os pares
//retorne um array com o dobro dos valores
const total = numeros.reduce((acumulador, valor) => acumulador += valor)
console.log(total)

const totalPares = numeros.reduce(((acumulador, valor) => {
    if(valor %2 === 0){acumulador += valor}
    return acumulador
}),0)
console.log(totalPares)

//retornar a soma do dobro de todos os pares
//filtra pares, dobrar valores, reduzir
const xtudo = numeros
    .filter(num => num %2 === 0)
    .map(num => num * 2)
    .reduce((acc, num) =>  acc += num)
console.log(xtudo)

//for each
const a1 = [1,2,3,4,5,6,7,8,9]

/* for(let valor of a1){
    console.log(valor)
} */

let totalS = 0
a1.forEach(valor => console.log(valor))

a1.forEach(valor => {
    totalS += valor
})
console.log(totalS)



