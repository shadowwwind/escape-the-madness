import './style.css'
import {soundOn} from "./sound.ts";

type scenes = "scene1" | "mainMenu" | "intro"

let currentPlace:scenes = "mainMenu"
function changeScene(scene:scenes) {
    if (currentPlace === "scene1" && soundOn) {
        let audio = new Audio("sounds/Door2.mp3")
        audio.play()
    }

    currentPlace = scene
    let htmlScenes = document.getElementsByClassName("scene")
    for (let i = 0; i < htmlScenes.length; i++) {
        htmlScenes[i].classList.add("hidden")
    }
    let element:HTMLElement = document.getElementById(scene)!
    console.log(scene)
    element.classList.remove("hidden")
}
const sceneSwitchers = document.querySelectorAll<HTMLButtonElement>("button.changeScene");
for (const sceneSwitcher of sceneSwitchers) {
    let target:scenes = sceneSwitcher.dataset.target as scenes;
    sceneSwitcher.addEventListener("click", () => {
        changeScene(target);
    })
}