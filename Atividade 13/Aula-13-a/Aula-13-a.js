/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/
(function (){

/*
1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
Imprima o tamanho desse array.
*/
var cidades = [ "São Paulo" , "Rio de janeiro" , "Salvador" , "Belo Horizonte" , "Fortaleza" ];

console.log(cidades.length);


/*
2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
Adicione um país no começo do array.
Adicione um país no fim do array.
Imprima esse array.
*/
var paises = [ "Taiwan", "Irlanda" , "Portugal", "Argentina", "India" ]

var adicionar = paises.unshift('Japão')

var adicionar = paises.push('Brasil')

console.log(paises)

/*
3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
Remova um item no começo do array.
Remova um item no fim do array.
Imprima esse array.
*/

var livros = [ "Dom Casmurro" , "Memorias Postumas de Bras cubas" , "Vidas Secas", "O Cortico" , "Macunaima" ]

var primeiro = livros.shift(); 

var ultimo = livros.pop();

console.log(livros)


/*
4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
Coloque em um novo array 3 desses números.

Imprima esse novo array.
*/
var numeros = [ 20 , 30 , 40 ,50 ,60];
var i = 0;
var b = [];
while (i<3)
{
    b.push (numeros[i]);
    i++;
}
console.log(b)
console.log(numeros)


/* 
5 - Declare uma variável que contenha um array com 5 vogais em strings.
Coloque esse array ao contrário e una todas essas letras em uma string.
Imprima em um console.log.
*/

var vogais = [ "a" , "e", "i" , "o" , "u"]

vogais.reverse()

console.log(vogais)


})();
