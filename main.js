let segundos = 0;
let cronometroAtivo = false;
let intervalo;

function atualizarDisplay() {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
  const secs = String(segundos % 60).padStart(2, '0');

  document.getElementById('display').textContent = ${horas}:${minutos}:${secs};
}

function iniciar() {
  if (!cronometroAtivo) {
    cronometroAtivo = true;
    intervalo = setInterval(() => {
      segundos++;
      atualizarDisplay();
    }, 1000);
  }
}

function parar() {
  cronometroAtivo = false;
  clearInterval(intervalo);
}

function zerar() {
  cronometroAtivo = false;
  clearInterval(intervalo);
  segundos = 0;
  atualizarDisplay();
}

function irPara(id) {
  const secao = document.getElementById(id);
  if (secao) {
    secao.scrollIntoView({ behavior: 'smooth' });
  }
}