const apiKey = "7e19bf59fdeed4b86713a2e611fa1523";
const cidadeInput = document.querySelector("#cidade");
const seach = document.querySelector("#botao");


seach.addEventListener("click", (e) => {

  e.preventDefault();
  const cidade = cidadeInput.value;

  lerCidade(cidade);
})

function lerCidade(cidade) {
  exibir(cidade);
}

const exibir = async (cidade) => {

  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

  const resposta = await fetch(urlApi)
  const dados = await resposta.json();

  console.log(dados)
  const nomeCidade = dados.name;
  const temperatura = dados.main.temp;
  const tempo = dados.weather[0].description;
  const umidade = dados.main.humidity;

  let show = document.getElementById("ptBaixo")

  show.innerHTML = `<div class="cidade"><span>${nomeCidade}</span></div>
  <div class="temperatura"><span>${Math.round(temperatura)}°C</span></div>
  <div class="tempo"><span>${tempo}</span></div>
  <div class="chuva"><span>${umidade}% de chuva</span></div>`
}

