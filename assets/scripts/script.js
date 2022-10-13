// Link js com HTML
const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currency-select')


const dolar = 5.26
const euro = 5.14

//Função para converter real em dolar
const convertValues = () => {
    const myValue = document.getElementById('myValue').value


    const realFinal = document.getElementById('realFinal')
    const convertFinal = document.getElementById('dolarFinal')

    //Formatação da moeda real -ES6
    realFinal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(parseFloat(myValue).toFixed(2));

    //Formatação da moeda euro -ES6 
    if (select.value === `€ Euro`) {
        convertFinal.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format((parseFloat(myValue) / euro).toFixed(2));
    } else {

        //Formatação da moeda dolar -ES6
        convertFinal.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format((parseFloat(myValue) / dolar).toFixed(2));
    }


}

//Função chamada na troca de moeda
const changeCurrency = () => {
    const currencyName = document.getElementById('currency-selected')
    const currencyImg = document.getElementById('imagen-currency')

    console.log(select.value)
    if (select.value === `€ Euro`) {
        currencyName.innerHTML = `€ Euro`
        currencyImg.src = './assets/imagens/euro.svg'
    } else {
        currencyName.innerHTML = `US$ Dólar americano`
        currencyImg.src = './assets/imagens/estados-unidos.svg'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
