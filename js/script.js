const change = document.querySelector("body");
const button = document.querySelector("button");

const colors= ['blue', 'orange', 'purple', 'violent', 'green', 'black', 'yellow'];
change.style.backgroundColor = "red";

function buttonFunction() {
    const nextColor = parseInt(Math.random() * colors.length);
    change.style.backgroundColor = colors[nextColor];
}

button.addEventListener("click", buttonFunction);