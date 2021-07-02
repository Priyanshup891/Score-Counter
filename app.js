let value = 0;
const count = document.querySelector("#count");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(a){
        const styles = a.currentTarget.classList;
        if (styles.contains("decrease")) {
            value--;
        }
        else if (styles.contains("increase")) {
            value++;
        }
        else {
            value==0;
        }
        if (value > 0) {
            count.style.color = "green";
        }
        if (value < 0) {
            count.style.color = "red";
        }
        if (value==0) {
            count.style.color = "black";
        }
        count.textContent = value;
    })
})
