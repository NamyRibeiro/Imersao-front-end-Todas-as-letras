// Atividade 11

//No exercício 3 vamos usar for, e não while.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

// Adicione a resposta na linha abaixo de cada exercício

// Utilize a tabela do link para auxiliar no exercício 1 e 2:
// http://www.prosangue.sp.gov.br/artigos/quem_doa_pra_quem.html

// 1 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com if para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `A+`, `A-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
// Exemplo se receber A+: "A+ doa para A+ e B+".

function tipoSanguineo(tipoSanguineo) {
if (tipoSanguineo === "A+"){
    return "Doa para A+ e AB+"
}

else if (tipoSanguineo === "A-") {
    return "Doa para A+, A-,AB+ e AB-"
}

else{
    return "não está em nossa base"
}
}

// 2 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com switch para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `B+`, `B-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.

function tipoSanguineo(tipoSanguineo){
    switch(tipoSanguineo) {
        case "B+":
        return "Doa para B+ e AB+";
   
    break;

    case "B-":
    return "Doa para B+, B-, AB+ e AB-";
    break;

    default:
     return "não está em nossa base"
   
}
}
// 3 - Crie uma laço de repetição com for que se inicia com 5 e incrementa de um em um até chegar em 15.

for (var i = 5; i <= 15; i++) {
   console.log(i);
}