const container = document.getElementById("container");

const POIs = {
    22: "Chandra Bahadur Dangi from Nepal was only 21.5 inches tall",
    68: "This is how tall I am (on a good day)",
    107: "The tallest person, Robert Wadlow, was this tall",
    120: "You've reached 10 feet",
    600: "This is 50 feet! Wow",
    63360: "A full mile! I'm impressed"
}

let count = 0
function AddChunk() {
    for (let i = 0; i < 10; i++) {
        const block = document.createElement("div");
        block.className = "inch";
        block.innerHTML = `${Math.floor(count / 12)}'${count % 12}"`;
        if (Object.keys(POIs).includes(count.toString())) {
            block.innerHTML += ` ${POIs[count]}`;
            console.log("woah it worked")
        }
        if ((Math.random() * 4096) > 4095) {
            block.classList.add("shiny");
            console.log("shiny")
        }
        container.appendChild(block);
        count++;
    }
}

AddChunk()
window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop +
        (2 * document.documentElement.clientHeight) >=
        document.documentElement.scrollHeight
    ) {
        AddChunk();
    }
});