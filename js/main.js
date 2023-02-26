let totalConta = document.querySelector('#number-check');
let listaDeBotao = document.querySelectorAll('.percent');
let comissaoCustom = document.querySelector('.custom');
let numPessoa = document.querySelector('#number-people');
let sumPerson = document.querySelector('#tip-person');
let totalPerson = document.querySelector('#total');


//calculo de comissões
function calcularValores(comissao) {
    const qtdPessoa = parseFloat(totalConta.value) / parseInt(numPessoa.value);
    const checkPerson = (qtdPessoa * comissao).toFixed(2);
    const checkTotal = (qtdPessoa * comissao + qtdPessoa).toFixed(2);

    sumPerson.textContent = checkPerson;
    totalPerson.textContent = checkTotal;
}

//capitura de eventos
numPessoa.addEventListener('focusout', () => {
    const nPessoa = parseInt(numPessoa.value);

    if (nPessoa <= 0) {
        document.querySelector('.messagen').textContent = "Can't be zero";
        numPessoa.classList.add('focus-color');
    } else {
        document.querySelector('.messagen').textContent = '';
        numPessoa.classList.remove('focus-color');
    }

    sumPerson.textContent = '0.00';
    totalPerson.textContent = '0.00';
});

totalConta.addEventListener('focusout', () => {
    sumPerson.textContent = '0.00';
    totalPerson.textContent = '0.00';
})

//verificar qual botão de comissão foi clicado

for (let i = 0; i < listaDeBotao.length; i++) {
    const botaoComissao = listaDeBotao[i];
    const valorComissao = parseInt(botaoComissao.value);

    botaoComissao.onclick = () => {

        //passagem de comissão de fixa
        const comissao = valorComissao / 100;
        calcularValores(comissao);
    }
}

//comissão customizada

comissaoCustom.addEventListener('focusout', () => {
    const comissao = parseFloat(comissaoCustom.value) / 100;
    calcularValores(comissao);
})
