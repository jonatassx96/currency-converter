// Link js com HTML
const button = document.getElementsByTagName('button')[0]


const dolar = 5.28

const convertValues = () => {
    const myValue = document.getElementById('myValue').value
    const realFinal = document.getElementById('realFinal')
    const dolarFinal = document.getElementById('dolarFinal')
    const dolarConvert = (parseFloat(myValue) / dolar).toFixed(2)

    realFinal.innerHTML = parseFloat(myValue).toFixed(2)
    dolarFinal.innerHTML = dolarConvert

}

button.addEventListener('click', convertValues)

console.log(myValue)

