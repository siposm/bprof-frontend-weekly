import { Renderer } from "./renderer";
import { Snake } from "./snake";

export class Logic {
    renderer: Renderer
    snake: Snake
    
    constructor() {
        this.renderer = new Renderer()
        this.snake = new Snake(50, 50)
    }

    display(): void {
        this.renderer.render(this.snake)
    }
}