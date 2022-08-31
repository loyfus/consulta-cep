let descricao = document.querySelector(".cep-des")


function consulta() {
    let cep = document.querySelector('#cep').value;
        if (cep.length !== 9) {
            descricao.textContent= "CEP invalido"
            return;
        }


    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log (data);
            resultado(data);
        });
    });
}

function resultado(dados) {
    let descricao = document.querySelector(".cep-des");

    descricao.innerHTML =`Endereço: ${dados.logradouro}</br>
                            Bairro: ${dados.bairro}</br>
                            Cidade: ${dados.localidade}</br>
                            UF: ${dados.uf}</br>`
}