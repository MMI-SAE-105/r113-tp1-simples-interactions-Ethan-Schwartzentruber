// TODO

// Changer la couleur du texte 

const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");

aMettreEnRouge.style.color = "red";

// Réagir à un cick

const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

enRougeSuiteACick.addEventListener("click", (evt) => {
    enRougeSuiteACick.style.color = "red"
});

// Trouvez tous les 'H2' du document

const collH2 = document.querySelectorAll("H2")

collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red";
    });
});

// Fin du TP