function consulta() {
    const descricao = document.querySelector('.cep-des');
    const cep = document.querySelector('#cep').value;
    if (cep.length !== 9) {
        descricao.textContent = 'CEP inválido';
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            resultado(data);
        });
    });
}

function resultado(dados) {
    const descricao = document.querySelector('.cep-des');

    descricao.innerHTML = `Endereço: ${dados.logradouro}</br>
                            Bairro: ${dados.bairro}</br>
                            Cidade: ${dados.localidade}</br>
                            UF: ${dados.uf}</br>`;
}
