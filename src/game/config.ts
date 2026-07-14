import Phaser from "phaser";
import GameScene from "../scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    parent: "game-container",

    width: 448,
    height: 448,

    backgroundColor: "#111111",

    scene: [GameScene],

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

export default config;