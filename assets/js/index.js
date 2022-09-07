document.addEventListener("DOMContentLoaded", () => {
  const visor = document.querySelector(".visor");
  const teclasNumero = document.querySelectorAll(".numero");
  const limpar = document.querySelector(".limpar");
  const operacoes = document.querySelectorAll(".operacao");
  const equal = document.querySelector(".equal");
  const module = document.querySelector(".module");

  let primeiroNumero = null;
  let operacao = null;
  let isNegative = false;

  const alertError = () => alert("Não foi possível realizar o seu cálculo.");

  const clickNumero = (e) => {
    const numero = e.target.innerText;
    if (visor.innerHTML.trim() === "0") visor.innerHTML = numero;
    else visor.innerHTML += numero;
  };

  const clickOperador = (e) => {
    operacao = e.target.innerText;
    primeiroNumero = visor.innerHTML.trim();
    visor.innerHTML = "0";
  };

  const clear = () => (visor.innerHTML = "0");

  const resultado = () => {
    try {
      if (operacao !== "%")
        visor.innerHTML = eval(
          primeiroNumero + operacao + visor.innerHTML.trim()
        );
      else porcento(visor.innerHTML.trim());
    } catch (e) {
      alertError();
    }
  };

  const porcento = (segundoNumero) => {
    try {
      visor.innerHTML = String(
        (Number(primeiroNumero) / 100) * Number(segundoNumero)
      );
    } catch (e) {
      alertError();
    }
  };

  const moduloNumero = () => {
    visor.innerHTML = isNegative
      ? visor.innerHTML.trim().substring(1, visor.innerHTML.trim().length)
      : "-" + visor.innerHTML;
    isNegative = !isNegative;
  };

  teclasNumero.forEach((tecla) => {
    tecla.addEventListener("click", clickNumero);
  });

  operacoes.forEach((operador) => {
    operador.addEventListener("click", clickOperador);
  });

  limpar.addEventListener("click", clear);

  equal.addEventListener("click", resultado);

  module.addEventListener("click", moduloNumero);
});
