function consulta() {
    const descricao = document.querySelector('.cep-des');
    let cep = document.querySelector('#cep').value;

    // remove qualquer caractere que não seja número
    cep = cep.replace(/\D/g, '');

    if (cep.length !== 8) {
        descricao.textContent = 'CEP inválido';
        return;
    }

    // feedback para o usuário durante a consulta
    descricao.textContent = 'Carregando...';

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => resultado(data))
        .catch(() => {
            descricao.textContent = 'Erro na consulta';
        });
}

function resultado(dados) {
    const descricao = document.querySelector('.cep-des');

    if (dados.erro) {
        descricao.textContent = 'CEP não encontrado';
        return;
    }

    descricao.innerHTML = `Endereço: ${dados.logradouro}<br>
                            Bairro: ${dados.bairro}<br>
                            Cidade: ${dados.localidade}<br>
                            UF: ${dados.uf}`;
}
