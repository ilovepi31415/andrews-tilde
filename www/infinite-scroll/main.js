const container = document.getElementById("container");
const scoreBox = document.getElementById("score-box")

const POIs = {
    22: "Chandra Bahadur Dangi from Nepal was only 21.5 inches tall",
    68: "This is how tall I am (on a good day)",
    107: "The tallest person, Robert Wadlow, was this tall",
    120: "You've reached 10 feet",
    600: "This is 50 feet! Wow",
    63360: "A full mile! I'm impressed"
}

let distance = 0;
let score = parseInt(localStorage.getItem("score")) || 0;

// Loads the infinite elements as the user scrolls
function AddChunk() {
    for (let i = 0; i < 10; i++) {
        const block = document.createElement("div");
        block.className = "inch";
        block.innerHTML = `${Math.floor(distance / 12)}'${distance % 12}"`;
        if (Object.keys(POIs).includes(distance.toString())) {
            block.innerHTML += ` ${POIs[distance]}`;
            console.log("woah it worked")
        }

        // Gives a chance to make a shiny for every element loaded
        if ((Math.random() * 4096) > 4095) {
            block.classList.add("shiny", "clickable");
            console.log("shiny");
            block.addEventListener("click", () => {
                if (block.classList.contains("clickable")) {
                    block.classList.remove("clickable")
                    score++;
                    UpdateScore();
                }
            });
        }
        container.appendChild(block);
        distance++;
    }
}

// Increases the user's score 
function UpdateScore() {
    scoreBox.innerHTML = `Score: ${score}`;
    localStorage.setItem("score", score);
}

// Initializes chunks to fill twice the entire height of the window 
do {
 AddChunk();
} while (2 * document.documentElement.clientHeight > document.documentElement.scrollHeight);
UpdateScore();

// Adds chunks if the user scrolls close to the bottom of the page
window.addEventListener("scroll", () => {
    if (
        document.documentElement.scrollTop +
        (2 * document.documentElement.clientHeight) >=
        document.documentElement.scrollHeight
    ) {
        AddChunk();
    }
});