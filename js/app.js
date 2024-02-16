function adicionar() {
    let listaDeProdutos = document.getElementById("produto");
    let produto = listaDeProdutos.options[listaDeProdutos.selectedIndex].value;
    let partesProduto = produto.split(' - ')
    console.log(partesProduto);
    let quantidade = document.getElementById('quantidade').value;

    //Cria o novo produto e o adiciona no carrinho
    let carrinho = document.querySelector("#lista-produtos");
    let novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${partesProduto[0]} <span class="texto-azul">${partesProduto[1]}</span>`;
    carrinho.appendChild(novoProduto);

    //pega o total ja existente no carrinho
    let totalExistente = parseInt(pegarTotalExistente());

    //pega os adicionados
    let adicionados = parseInt(quantidade * extrairNumero(partesProduto[1]));

    //somar o total existente + adicionados
    let totalDaSoma = totalExistente + adicionados;

    //mostrar o total na tela
    let mensagemTotal = document.getElementById('valor-total');
    mensagemTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalDaSoma}</span>`
}

function pegarTotalExistente() {
    let totalExistente = document.querySelector('#valor-total').innerText;
    let numero = totalExistente.match(/\d+/)[0];
    return numero;
}

function extrairNumero(texto) {
    let numeros = texto.match(/\d+/g);
    return parseInt(numeros);
}

function limpar() {
    let listaDeProdutos = document.getElementById('lista-produtos')
    listaDeProdutos.innerHTML = '';


    //apagando a mensagem de total
    let mensagemTotal = document.getElementById('valor-total')
    mensagemTotal.innerHTML = '<span class="texto-azul" id="valor-total">R$0</span>'
}
