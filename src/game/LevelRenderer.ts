import Phaser from "phaser";
import { COLORS, TILE_SIZE } from "../constants/GameConstants";

export default class LevelRenderer {

    private scene: Phaser.Scene;
    private map: string[];

    constructor(
        scene: Phaser.Scene,
        map: string[]
    ) {
        this.scene = scene;
        this.map = map;
    }

    render() {

        this.map.forEach((row, y) => {

            row.split("").forEach((tile, x) => {

                const posX = x * TILE_SIZE;
                const posY = y * TILE_SIZE;

                switch (tile) {

                    case "#":
                        this.scene.add.rectangle(
                            posX,
                            posY,
                            TILE_SIZE,
                            TILE_SIZE,
                            COLORS.WALL
                        ).setOrigin(0);
                        break;

                    case ".":
                        this.scene.add.rectangle(
                            posX,
                            posY,
                            TILE_SIZE,
                            TILE_SIZE,
                            COLORS.FLOOR
                        ).setOrigin(0);
                        break;

                    case "B":
                        break;

                    case "R":
                        break;

                    case "b":
                        this.scene.add.rectangle(
                            posX,
                            posY,
                            TILE_SIZE,
                            TILE_SIZE,
                            COLORS.BLUE_GOAL
                        ).setOrigin(0);
                        break;

                    case "r":
                        this.scene.add.rectangle(
                            posX,
                            posY,
                            TILE_SIZE,
                            TILE_SIZE,
                            COLORS.RED_GOAL
                        ).setOrigin(0);
                        break;
                }

            });

        });

    }

}