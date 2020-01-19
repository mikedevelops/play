import { Vector2, Renderer, Graphics } from "paint";

const stage = document.getElementById("stage");
const renderer = new Renderer(stage as HTMLCanvasElement);

renderer.start();

Graphics.fillRect(renderer, "red", 10, 10, 10);

