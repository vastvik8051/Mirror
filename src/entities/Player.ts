import Phaser from "phaser";
import { TILE_SIZE } from "../constants/GameConstants";

export default class Player {
    private rectangle: Phaser.GameObjects.Rectangle;

    private tileX: number;
    private tileY: number;

    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        color: number
    ) {
        this.tileX = x;
        this.tileY = y;

        this.rectangle = scene.add.rectangle(
            x * TILE_SIZE,
            y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE,
            color
        );

        this.rectangle.setOrigin(0);
        this.rectangle.setDepth(10);
    }

    public move(dx: number, dy: number): void {
    this.tileX += dx;
    this.tileY += dy;

    console.log(
        "Player moved to:",
        this.tileX,
        this.tileY
    );

    this.rectangle.setPosition(
        this.tileX * TILE_SIZE,
        this.tileY * TILE_SIZE
    );
}

    public getX(): number {
        return this.tileX;
    }

    public getY(): number {
        return this.tileY;
    }

    public canMove(
        dx: number,
        dy: number,
        level: { isWall(x: number, y: number): boolean }
    ): boolean {

        return !level.isWall(
            this.tileX + dx,
            this.tileY + dy
        );

    }

    public tryMove(
        dx: number,
        dy: number,
        level: { isWall(x: number, y: number): boolean }
    ): void {

        if (!this.canMove(dx, dy, level)) {
            return;
        }

        this.move(dx, dy);

    }
}