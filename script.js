const body = document.querySelector("body");
const span = document.querySelector(".span-inputNumber");
const input = document.querySelector(".inputNumber");
const alignExit = document.querySelector(".alignExit");
const showNumber = document.querySelector("#exitNumbers");
const butao = document.querySelector(".button-sorteados");
const butao2 = document.querySelector(".button-bolao");
const options = document.querySelector(".makerbloc");
const closePopup = document.querySelector(".popup-close");
const popuprapper = document.querySelector(".popuprapper");
const qtdPar = document.querySelector("#qtdpar");
const valuePar = document.querySelector("#value-par");
const qtdImpares = document.querySelector("#qtdimpares");
const valueImpares = document.querySelector("#value-impares");
const legend = document.querySelector(".legend");

const removeDisabled = () => butao.removeAttribute("disabled");
const addDisplayNone = () => (legend.style.display = "none");
const removeDisplayNone = () => (legend.style.display = "block");
const addDisabled = () => butao.setAttribute("disabled", "disabled");
const removeDisabled2 = () => butao2.removeAttribute("disabled");
const addDisabled2 = () => butao2.setAttribute("disabled", "disabled");
closePopup.addEventListener("click", () => {
  popuprapper.style.display = "none";
  body.style.overflow = "visible";
});
window.addEventListener("load", () => {
  alignExit.style.display = "none";
  popuprapper.style.display = "none";
});
input.addEventListener("input", (e) => {
  let value = e.currentTarget.value;
  value = value
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2")
    .replace(/(\d{2})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  if (value.length == 17) {
    removeDisabled();
    butao2.focus();
  } else {
    addDisabled();
    addDisplayNone();
    cleanMarcker();
    showNumber.style.display = "none";
  }
});
input.addEventListener("keypress", (e) => {
  let char = String.fromCharCode(e.keyCode);
  const validation = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let valor = e.target.value;
  if (char in validation) {
    return valor;
  } else {
    e.preventDefault();
  }
});
document.addEventListener("click", (e) => {
  const verific = e.target.getAttribute("class");
  if (verific === "inputNumber") {
    return span.classList.replace("span-inputNumber", "spanlater");
  }
});
input.addEventListener("focus", (e) => {
  let valor2 = e.target.value;
  if (valor2 !== "") {
    addDisplayNone();
    return span.classList.replace("span-inputNumber", "spanlater");
  }
  showNumber.style.display = "none";
  span.classList.replace("spanlater", "span-inputNumber");
});
input.addEventListener("focusout", (e) => {
  let valor = e.target.value;
  if (valor === "") {
    addDisabled();
    return span.classList.replace("spanlater", "span-inputNumber");
  }
  input.classList.remove("inputNumber-erro");
  span.classList.replace("span-inputNumber", "spanlater");
});
const cleanMarcker = () => {
  for (let i = 0; i < 60; i++) {
    options.children[i].classList.replace("preenchido", "preencher");
  }
};
function errorInputNamber() {
  alignExit.style.display = "none";
  body.style.overflow = "hidden";
  removeDisabled();
  cleanMarcker();
  addDisplayNone();
  span.classList.replace("span-inputNumber", "spanlater");
  input.classList.add("inputNumber-erro");
  setTimeout(() => {
    popuprapper.style.display = "initial";
  }, 800);
}
function clickInputRepresentation() {
  showNumber.style.display = "block";
  cleanMarcker();
  const numberRepresentation = input.value.replace(/-/g, "");
  let arrayRepresetation = [...numberRepresentation];
  let number1 = arrayRepresetation[0] + arrayRepresetation[1];
  let number2 = arrayRepresetation[2] + arrayRepresetation[3];
  let number3 = arrayRepresetation[4] + arrayRepresetation[5];
  let number4 = arrayRepresetation[6] + arrayRepresetation[7];
  let number5 = arrayRepresetation[8] + arrayRepresetation[9];
  let number6 = arrayRepresetation[10] + arrayRepresetation[11];
  const result = [number1, number2, number3, number4, number5, number6];
  result.sort((a, b) => a - b);
  result.map((num) => {
    valor = `${num}`;
    if (valor > "60") {
      errorInputNamber();
    } else {
      alignExit.style.display = "initial";
      removeDisplayNone();
      input.classList.remove("inputNumber-erro");
      let result2 = result.toString();
      let result3 = result2.replace(/,/g, "-");
      showNumber.innerText = result3;
      let final = valor - 1;
      options.children[`${final}`].classList.replace("preencher", "preenchido");
      alignExit.style.display = "initial";
      span.classList.replace("spanlater", "span-inputNumber");
      addDisabled();
      setTimeout(() => {
        removeDisabled2();
      }, 1000);
    }
  });
  result.sort((a, b) => {
    if (a - b === 0) {
      return errorInputNamber();
    }
  });
  const showNumberPar = result.filter((number) => {
    let divtwo = number % 2;
    if (divtwo === 0) {
      return number;
    }
  });
  let transfInString = showNumberPar.toString();
  let changeComa = transfInString.replace(/,/g, "-");
  valuePar.innerText = changeComa;
  qtdPar.innerText = showNumberPar.length;

  const showNumberImpares = result.filter((number) => {
    let divtwo = number % 2;
    if (divtwo !== 0) {
      return number;
    }
  });
  let transfInStringimpar = showNumberImpares.toString();
  let changeComaimpar = transfInStringimpar.replace(/,/g, "-");
  valueImpares.innerText = changeComaimpar;
  qtdImpares.innerText = showNumberImpares.length;
}
function clickInputBolao() {
  // console.log("teste clickInputVariants()");
}
