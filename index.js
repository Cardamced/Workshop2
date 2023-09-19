let random = Math.floor(Math.random() * 1000 + 1);
const number = document.getElementById('number');
const message = document.getElementById('message');
const btnForm = document.getElementById('btn');
const btnRestart = document.getElementById('btnRestart');

btnRestart.style.display = 'none';
let guessCount = 0;

const tries = Math.max(0, prompt("Choisis le nombre de tentatives"));

const propStyle = {
    color: "white",
    backgroundColor: "lightgreen",
    width: "50vw",
    height: "auto",
    borderRadius: "8px",
    padding: "1rem",
    margin: "auto",
    marginBottom: "1rem",
    fontSize: "2rem",
    textTransform: "uppercase",
};

btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (guessCount === tries) {
        btnRestart.style.display = "block";
        return message.innerHTML = `Perdu, trop d'essais ! Le résultat est ${random}`;
    } else {
        if (parseInt(number.value) === random) {
            propStyle.backgroundColor = "lightgreen";
            Object.assign(message.style, propStyle);
            btnRestart.style.display = "block";
            return message.innerHTML = `🤗 bravo mais tu es un devin ! Tu as trouvé le juste prix en ${guessCount} essai${guessCount === 1 ? "" : "s"}`;
        } else if (parseInt(number.value) < random) {
            guessCount++;
            propStyle.backgroundColor = "lightblue";
            Object.assign(message.style, propStyle);
            return message.innerHTML = `👍 c'est plus ! Il te reste ${tries - guessCount} essai${tries - guessCount <= 1 ? "" : "s"}.`;
        } else if (parseInt(number.value) > random) {
            guessCount++;
            propStyle.backgroundColor = "red";
            Object.assign(message.style, propStyle);
            return message.innerHTML = `👎 c'est moins ! Il te reste ${tries - guessCount} essai${tries - guessCount <= 1 ? "" : "s"}.`;
        } else {
            guessCount++;
            propStyle.backgroundColor = "grey";
            Object.assign(message.style, propStyle);
            return message.innerHTML = `😡 valeur incorrecte ! Il te reste ${tries - guessCount} essai${tries - guessCount <= 1 ? "" : "s"}.`;
        }
    };
});

btnRestart.addEventListener('click', () => {
    location.reload()
});

btnRestart.addEventListener('mouseover', () => {
    btnRestart.style.backgroundColor = "yellow";
});

btnRestart.addEventListener('mouseleave', () => {
    btnRestart.style.backgroundColor = "blue";
});
console.log("valeur random :", random);