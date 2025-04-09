import { Renderer } from "./renderer.js";
import { Snake } from "./snake.js";
export class Logic {
    renderer;
    snake;
    constructor() {
        this.renderer = new Renderer();
        this.snake = new Snake(50, 50);
    }
    display() {
        this.renderer.render(this.snake);
    }
}
