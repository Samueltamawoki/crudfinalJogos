//preencher os inputs com arrow functions
const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}
//autopreenchimento
const cepValido = (cep) => {
    if (cep.length == 8) {
        return true;
    } else {
        return false;
    }
}
//buscar API
//Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.
const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const db = await fetch(url);
        const endereco = await db.json();
            preencherFormulario(endereco);
        }
}
document.getElementById("cep").addEventListener("focusout", pesquisarCep);


//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var telefone = document.getElementById('tel').value
    var rua = document.getElementById('rua').value
    var cidade = document.getElementById('cidade').value
    var estado = document.getElementById('estado').value
    var cep = document.getElementById('cep').value
    var email = document.getElementById('email').value
    var cpf = document.getElementById('cpf').value
    var idade = document.getElementById('idade').value
    var senha = document.getElementById('senha').value

    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('pessoas', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, idade: idade, sobrenome: sobrenome, telefone: telefone, rua: rua, cidade: cidade, estado: estado, cep: cep, email: email, cpf: cpf, senha: senha}) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON

}


