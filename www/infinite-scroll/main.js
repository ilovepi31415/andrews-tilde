const container = document.getElementById("container");

let count = 0
function AddChunk() {
    for (let i = 0; i < 10; i++) {
        const block = document.createElement("div");
        block.className = "inch";
        block.innerHTML = `${Math.floor(count / 12)}'${count % 12}"`;
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