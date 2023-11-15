let valorTotal = 0;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    let preco = valorUnitario * quantidadeProduto;
    let carrinho = document.getElementById('lista-produtos');
    if(quantidadeProduto>0){
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    valorTotal += preco;
    let campoTotal = document.getElementById('valor-total');
    }
    campoTotal.textContent = `${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ ';
}