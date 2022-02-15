let findNumber = document.getElementById("number");
let buttonCheck = document.getElementById("check");
let writeText = document.querySelector(".write");
let winnerText = document.getElementById("winner");
let remainingChance = document.getElementById("winner")
let initialValue = document.getElementById("ilk_değer");
let lastValue = document.getElementById("son_değer");
let randomNumber = Math.floor(Math.random() * 100) + 1;

let count = 0;
buttonCheck.addEventListener("click", () => {
    let userInput = findNumber.value;
    if (userInput < 1 || userInput > 100) {
        alert("Lütfen 1 ve 100 arasında bir sayı giriniz");
    }
    else if (userInput < randomNumber) {
        remainingChance.innerHTML--;
        initialValue.innerHTML = findNumber.value;
        count += 1
        // alert(`${findNumber.value} ile 100 arası gir `);
        findNumber.value = "";
        if (remainingChance.innerHTML == 0) {
            conclusion.innerText = "Game Over";
            conclusion.style.color = "blue";
            conclusion.style.fontSize = "3rem";
        }
        
    } else if (userInput > randomNumber) {
        remainingChance.innerHTML--;
        lastValue.innerHTML = findNumber.value;
        count += 1
        findNumber.value = "";
        if (remainingChance.innerHTML == 0) {
            conclusion.innerText = "Game Over";
            conclusion.style.color = "blue";
            conclusion.style.fontSize = "3rem";
        }
        // alert("Lütfen sayınızı ${} azaltın");
        
    } else if (userInput == randomNumber) {
        findNumber.value = "";
        count += 1
        // writeText.style.display ="none"
        writeText.innerHTML = ""
        conclusion.innerText = "You Win!";
        conclusion.style.color = "brown";
        conclusion.style.fontSize = "3rem";
        alert(`Tebrikler ${count} defa da bildiniz `);
        // button.disabled = false
    }
    //   winner.innerHTML = hak;
});
