const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");

let onScreen = 0;
let onMemo = 0;
let operation = "";

screen.textContent = onScreen;

const calcular = (n1, n2, operation) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : "Erro: divisão por zero"),
    "%": (a, b) => (a / 100) * b,
  };

  if (operations[operation]) {
    return operations[operation](n1, n2);
  } else {
    return "Operação inválida";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      screen.textContent == 0 &&
      (!isNaN(button.textContent) || button.textContent == ".")
    ) {
      screen.textContent = button.textContent;
      onScreen = Number(screen.textContent);
    } else {
      if (
        screen.textContent != 0 &&
        (!isNaN(button.textContent) || button.textContent == ".")
      ) {
        screen.textContent += button.textContent;
        onScreen = Number(screen.textContent);
      }
    }

    if (button.textContent == "C") {
      screen.textContent = 0;
      onScreen = 0;
    }

    if (button.textContent == "+") {
      onMemo = Number(onScreen);
      operation = "+";
      screen.textContent = 0;
    }

    if (button.textContent == "-") {
      onMemo = Number(onScreen);
      operation = "-";
      screen.textContent = 0;
    }

    if (button.textContent == "X") {
      onMemo = Number(onScreen);
      operation = "*";
      screen.textContent = 0;
    }

    if (button.textContent == "/") {
      onMemo = Number(onScreen);
      operation = "/";
      screen.textContent = 0;
    }

    if (button.textContent == "%") {
      onMemo = Number(onScreen);
      operation = "%";
      screen.textContent = "0";
    }

    if (button.textContent == "=") {
      screen.textContent = calcular(onMemo, onScreen, operation);
      onScreen = Number(screen.textContent);
    }
  });
});
