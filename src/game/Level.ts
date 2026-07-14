import Phaser from "phaser";
import level1 from "../levels/level1";
import Player from "../entities/Player";
import { COLORS } from "../constants/GameConstants";

export default class Level {
    private map: string[];

    private bluePlayer: Player | null = null;
    private redPlayer: Player | null = null;

    constructor(scene: Phaser.Scene) {
        this.map = level1;

        this.createPlayers(scene);
    }

    public getMap(): string[] {
        return this.map;
    }

    public getTile(x: number, y: number): string {

        if (
            y < 0 ||
            y >= this.map.length ||
            x < 0 ||
            x >= this.map[y].length
        ) {
            return "#";
        }

        return this.map[y][x];

    }

    public isWall(x: number, y: number): boolean {
        return this.getTile(x, y) === "#";
    }

    public isBlueGoal(x: number, y: number): boolean {
        return this.getTile(x, y) === "b";
    }

    public isRedGoal(x: number, y: number): boolean {
        return this.getTile(x, y) === "r";
    }

    public getBluePlayer(): Player | null {
        return this.bluePlayer;
    }

    public getRedPlayer(): Player | null {
        return this.redPlayer;
    }

    public movePlayers(dx: number, dy: number): void {

        this.bluePlayer?.tryMove(
            dx,
            dy,
            this
        );

        this.redPlayer?.tryMove(
            -dx,
            -dy,
            this
        );

        this.checkWin();

    }

    private checkWin(): void {

        if (!this.bluePlayer || !this.redPlayer) {
            return;
        }

        const blueOnGoal = this.isBlueGoal(
            this.bluePlayer.getX(),
            this.bluePlayer.getY()
        );

        const redOnGoal = this.isRedGoal(
            this.redPlayer.getX(),
            this.redPlayer.getY()
        );

        if (blueOnGoal && redOnGoal) {
            console.log("Level Complete!");
        }

    }

    private createPlayers(scene: Phaser.Scene): void {
        this.map.forEach((row, y) => {

            row.split("").forEach((tile, x) => {

                switch (tile) {

                    case "B":
                        this.bluePlayer = new Player(
                            scene,
                            x,
                            y,
                            COLORS.BLUE
                        );
                        break;

                    case "R":
                        this.redPlayer = new Player(
                            scene,
                            x,
                            y,
                            COLORS.RED
                        );
                        break;

                }

            });

        });
    }
}