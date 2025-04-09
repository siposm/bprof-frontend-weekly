export class Renderer {
    setup() {
    }
    render(snake) {
        let root = document.querySelector("body");
        root.innerHTML = "";
        let div = document.createElement("div");
        div.style.height = "200px";
        div.style.width = "200px";
        div.style.backgroundColor = "red";
        div.style.position = "absolute";
        div.style.top = "30px";
        div.style.left = "30px";
        root?.appendChild(div);
    }
}
