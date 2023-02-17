async function getCurrencies() {
    const url ='https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json();
    console.log(data.Valute.AMD.Value);
    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);
    const amdRate = (data.Valute.AMD.Value/data.Valute.AMD.Nominal).toFixed(4)
    const rubAmdRate = (1/amdRate).toFixed(2);

    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');
    const amdElement = document.querySelector('#amd');
    const ramdElement = document.querySelector('#ramd');

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
    amdElement.innerText = amdRate;
    ramdElement.innerText = rubAmdRate;
}


getCurrencies()

