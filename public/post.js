//Função para enviar os dados POST - CREATE
function enviarDados() {
    //Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var idade = document.getElementById('idade').value
    var rg = document.getElementById('rg').value
    var cpf = document.getElementById('cpf').value
    var rua = document.getElementById('rua').value
    var numCasa = document.getElementById('numCasa').value
    var cidade = document.getElementById('cidade').value
    var bairo = document.getElementById('bairo').value
    var estado = document.getElementById('estado').value
    var email = document.getElementById('email').value
    var telefone = document.getElementById('tel').value
    var senha = document.getElementById('senha').value


    //Enviar um função que puxa o valor de uma API - FETCH
    fetch('pessoas', {
        method: 'POST', //Metodo POST HTTP
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome,sobrenome: sobrenome, idade: idade, rg: rg, cpf: cpf, rua: rua, numCasa : numCasa, cidade: cidade, bairo: bairo, estado: estado, email: email, telefone: telefone, senha: senha}) //Dados a serem enviados e convertidos
    })
    .then(resposta => resposta.JSON) //Converte a resposta para JSON

}
