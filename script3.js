document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            
            if (button.classList.contains("clear")) {
                currentInput = "";
                display.value = "";
            } else if (button.classList.contains("equals")) {
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch {
                    display.value = "Error";
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
