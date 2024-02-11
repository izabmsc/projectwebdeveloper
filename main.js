//let firstName = prompt('Digite seu primeiro nome: ')
//document.getElementById ("greeting").innerHTML = 'Hello' +' '+ firstName
//let greeting = 'Hello'
//let lastName = prompt('Qual o seu sobrenome: ') //prompt vai pedir para colocar informações na tela para ser adicionada
//let age = parseInt (prompt('Qual a sua idade? '))
//age = age + 2
//const age2 = 2
//age = age + age2


//console.log('meu nome é ' + firstName + ' '+ lastName + ' '+ 'tenho ' + age)
//console.log(age)
//console.log(age +age2)

//let friends =['Alan', 'Mark', 'Julia', 'Bella']
//console.log (friends)

//friends [1] = 'Anna'
//friends[1] = 'Carlinhos'
//friends[5] = 1

//console.log (friends)//array com as alterações "friends"
//console.log (friends[1])//array com 1 na lista
//sempre que tiver a variavel, qualquer alteração tem que imprimir de novo

//operações matematicas - para forçar a logica da matemetica colocar entre parenteses o que sera feito primeiro
//let a = 10 //int.
//let b = 5 //int.
//let = 2.5 //float

//let resultado = a + b
//console.log (resultado)

//Celsius em F
//let celsius = 0
//let Fahrenheit = 0
//celsius = parseFloat (prompt ("Digitite a temperatura em celsius")) //float é o controle de casas decimais
//Fahrenheit = celsius * 1.8 + 32
//alert ('A temperatura em Fahrenheit é de ' + Fahrenheit.toFixed(2))

//IDADE IF E ELSE
//let age = prompt('Qual a sua idade?')
//if (age >=18)
//{console.log ('você é um adulto')}
//else if (age >=15){
//    console.log ('você é um adolescente')}
//else {
//    console.log ('você não um adulto')}


//nota do aluno if else
//if else pode ser utilizado para sempre que estiver alguma mudança no resultado pretendido, e encerrar com else que no caso seria nenhuma das opções listadas
let grade = prompt ('digite a nota do aluno:')
if (grade > 100)
alert ('nota invalida')
else if (grade >= 90)
{
    alert ('Aluno nota A')
}
else if (grade >= 80)
{
    alert ('Aluno nota B')
}
else if (grade >= 70)
{
    alert ('Aluno nota C')
}
else if (grade >= 60)
{
    alert ('Aluno nota D')
}
else {
    alert ('Aluno nota F')
}