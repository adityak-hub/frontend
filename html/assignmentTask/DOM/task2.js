let textBox = document.getElementById("textBox");
let count = document.getElementById("count");

let max = 100;

textBox.addEventListener("input", function () {
    let used = textBox.value.length;
    let left = max - used;

    // stop typing when max is reached
    if (left <= 0) {
        textBox.value = textBox.value.substring(0, max);
        left = 0;
    }

    count.textContent = left;


    if (left > 60) {
        count.style.color = "green";
    } else if (left > 30) {
        count.style.color = "orange";
    } else {
        count.style.color = "red";
    }
});
