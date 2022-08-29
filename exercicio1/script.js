let nome 
let idade 

console.log(typeof(nome))
console.log(typeof(idade))
//Foi impresso undefined por que eu não atribuí nenhum nome ou idade as variáveis.

const nomePrompt = prompt ("Qual é o seu nome?")
console.log(nomePrompt)
let idadePrompt = prompt ("Qual a sua idade?")
console.log(idadePrompt)

console.log(typeof(nomePrompt))
console.log(typeof(idadePrompt))

console.log("Olá", nomePrompt, "você tem", idadePrompt, "anos.")



