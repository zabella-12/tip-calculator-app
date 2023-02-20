let totalConta = document.querySelector('#number-check')
let listaDeBotao = document.querySelectorAll('.percent')
let comissaoCustom = document.querySelector('.custom')
let numPessoa = document.querySelector('#number-people').value;


addEventListener('change', () => {
    totalConta = document.querySelector('#number-check').value
    totalConta = parseFloat(totalConta)
})

addEventListener('change', () => {
    numPessoa = document.querySelector('#number-people').value
    numPessoa = parseInt(numPessoa)

    if (numPessoa == 0) {
        const validaPessoa = document.querySelector('.messagen').innerHTML = `Can't be zero`
        input.toggle('focus-color');
    }
})

for (let i = 0; i < listaDeBotao.length; i++) {
    const botaoComissao = listaDeBotao[i];
    const valorComissao = parseInt(botaoComissao.value);
    const idBotaoComissao = `#valor_${valorComissao}`;

    botaoComissao.onclick = function () {
        comissaoFixa(idBotaoComissao)
    }

    function comissaoFixa(idBotaoClicado) {
        document.querySelector(idBotaoClicado).addEventListener('click', () => {
            const comissao = valorComissao / 100
            const qtdPessoa = totalConta / numPessoa
            let checkPerson = qtdPessoa * comissao
            let sumPerson = document.querySelector('#tip-person').innerHTML = checkPerson.toFixed(2)
            let checkTotal = (qtdPessoa * comissao) + qtdPessoa
            let totalPerson = document.querySelector('#total').innerHTML = checkTotal.toFixed(2)
        })
    }

    //calculo conta por pessoa comissão variável
    comissaoCustom.onclick = function () {      
        }
    }
    
    addEventListener('change', () => {
        comissaoCustom = document.querySelector('.custom').value;
        comissaoCustom = parseFloat(comissaoCustom)
    
                const qtdPessoa = totalConta / numPessoa
                let checkPerson = qtdPessoa * (comissaoCustom/100)
                let checkTotal = (qtdPessoa * (comissaoCustom/100)) + qtdPessoa
        
                let sumPerson = document.querySelector('#tip-person').innerHTML = checkPerson.toFixed(2)
                let totalPerson = document.querySelector('#total').innerHTML = checkTotal.toFixed(2)
    })
