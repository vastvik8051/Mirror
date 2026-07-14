import Phaser from "phaser";
import Level from "../game/Level";

export default class InputController {
    private scene: Phaser.Scene;
    private level: Level;

    constructor(scene: Phaser.Scene, level: Level) {
        this.scene = scene;
        this.level = level;

        this.scene.input.keyboard?.on(
            "keydown",
            this.handleKeyDown,
            this
        );
    }

    private handleKeyDown(event: KeyboardEvent): void {
        switch (event.key.toLowerCase()) {
            case "w":
                this.level.movePlayers(0, -1);
                break;

            case "s":
                this.level.movePlayers(0, 1);
                break;

            case "a":
                this.level.movePlayers(-1, 0);
                break;

            case "d":
                this.level.movePlayers(1, 0);
                break;
        }
    }
}