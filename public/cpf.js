function buscar() {
    fetch('db.json')
        .then(resposta => resposta.json())
        .then(banco => {
            const pessoas = banco.pessoas; // <- aqui está o ajuste
            const identificador = document.getElementById('valorDigitado').value.trim();
            let encontrado = false;

            pessoas.forEach(pessoa => {
                if (identificador == pessoa.cpf) {
                    document.getElementById('nome').innerHTML = pessoa.nome || '';
                    document.getElementById('sobrenome').innerHTML = pessoa.sobrenome || '';
                    document.getElementById('tel').innerHTML = pessoa.telefone || '';
                    document.getElementById('rua').innerHTML = pessoa.rua || '';
                    document.getElementById('cidade').innerHTML = pessoa.cidade || '';
                    document.getElementById('estado').innerHTML = pessoa.estado || '';
                    document.getElementById('cep').innerHTML = pessoa.cep || '';
                    document.getElementById('email').innerHTML = pessoa.email || '';
                    document.getElementById('idade').innerHTML = pessoa.idade || '';
                    document.getElementById('senha').innerHTML = pessoa.senha || '';
                    encontrado = true;
                }
            });

            if (!encontrado) {
                document.getElementById('erro').innerHTML = "⚠️ CPF não encontrado";
            } else {
                document.getElementById('erro').innerHTML = "";
            }
        })
        .catch(erro => {
            console.error("Erro ao carregar db.json:", erro);
            document.getElementById('erro').innerHTML = "Erro ao carregar dados.";
        });
}
