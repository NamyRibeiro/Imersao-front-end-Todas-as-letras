(function (){
//1 - Use o operador typeof para verificar o tipo de uma string, um número e um booleano.

    var nome = "Namy"
console.log (typeof nome)
/string 

    var idade = 24
console.log (typeof idade)
/number 

console.log (typeof true)
/boolean

/*
2 - Crie uma função que recebe o argumento `curso` que recebe uma string.
Crie uma variável constante dentro da função chamada `escola` que recebe o valor "Todas as Letras".
Retorne a string concatenada com a variável `escola`. Exemplo: "Curso de JavaScript - Todas as Letras".
Use template strings para o retorno.
*/

function concatena_curso(curso) {
    let escola = "Todas as Letras";
    return (curso + " - " + escola);
}

console.log(concatena_curso("Curso de Javascript"))

// 3 - Crie uma função que recebe o argumento `idade` que recebe um número e retorne uma string dizendo "Minha idade é `idade`". Use template strings para o retorno.

function minhaIdade(idade){
    return "Minha idade é " + idade
}

console.log (minhaIdade("24"))


})();

