const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const action = key.dataset.action;

    if (action === "clear") {
      display.value = "";
    } else if (action === "backspace") {
      display.value = display.value.slice(0, -1);
    } else if (action === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += key.textContent;
    }
  });
});
