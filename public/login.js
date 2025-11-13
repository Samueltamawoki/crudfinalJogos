// Função que é chamada quando o botão de login é clicado
function fazerLogin() {
    // Obter os valores do input
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value

    // Fazer uma requizição GET - READ e busca a pessoa
    fetch('http://localhost:3000/pessoas').then(resposta => resposta.json()).then(data => {
        // busca a pessoa cujo o usuario e a senha estejam com os valores digitados
        // esse seria um parametro FIND
        var pessoa = data.find(pessoas => pessoas.nome === nome && pessoas.senha === senha)
        //Se existir tal pessoa, redirecionar a pagina de bem vindo.html
        if(pessoa) {
            window.location.href = "./home.html"
            // caso contrário exibir um alerta com erro de usuário e senha

        } else {
            alert("Usuário/Nome incorretos! Tente novamente!")
        }
    })
}