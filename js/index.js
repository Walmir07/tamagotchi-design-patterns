function hitDog() {
    Dog.instance().receiveDamage(100);
}

document.getElementById("hitButton").onclick = hitDog;
