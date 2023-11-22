async function convertmoeda() {
  const valor = document.getElementById('valor').value;
  const moeda = document.getElementById('moeda').value;

  const apiUrl = 'https://api.exchangerate-api.com/v4/latest/BRL';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const rate = data.rates[moeda]; // Taxa de câmbio para a moeda escolhida
    const convertedvalor = (valor / rate).toFixed(2);

    document.getElementById('result').innerHTML = `
    <p>${valor} BRL em ${moeda}: ${convertedvalor} ${moeda}</p>
    `;
  } catch (error) {
    console.error('Erro ao converter moeda:', error);
    document.getElementById('result').innerHTML = '<p>Erro ao converter moeda.</p>';
  }
}

document.getElementById('convertButton').addEventListener('click', convertmoeda);
