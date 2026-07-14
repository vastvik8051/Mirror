import Phaser from "phaser";
import Level from "../game/Level";
import LevelRenderer from "../game/LevelRenderer";
import InputController from "../input/InputController";

export default class GameScene extends Phaser.Scene {

    private level!: Level;

    constructor() {
        super("GameScene");
    }

  create() {

    this.level = new Level(this);

    const renderer = new LevelRenderer(
        this,
        this.level.getMap()
    );

    renderer.render();

    new InputController(this, this.level);

    
}





}