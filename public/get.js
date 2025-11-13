fetch('pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        // Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        // Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCpf = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdEmail= document.createElement('td')
            var tdTelefone = document.createElement('td')
            var tdCep = document.createElement('td')

            // Preenche as celulas da linha com as informações
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCpf.innerText = objeto.cpf
            tdRua.innerText = objeto.rua
            tdCidade.innerText = objeto.cidade
            tdEstado.innerText = objeto.estado
            tdEmail.innerText = objeto.email
            tdTelefone.innerText = objeto.telefone
            tdCep.innerText = objeto.cep

            // ANEXANDO AS CÉLULAS NA ORDEM CORRETA DA TABELA HTML
            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCpf)
            tr.appendChild(tdCep)
            tr.appendChild(tdRua)
            
            tr.appendChild(tdCidade)
            tr.appendChild(tdEstado)
            tr.appendChild(tdEmail)
            
            
            tr.appendChild(tdTelefone)
            tabelaCorpo.appendChild(tr)
        })

    })
