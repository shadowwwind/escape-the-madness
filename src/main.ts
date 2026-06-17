import './style.css'
import {soundOn} from "./sound.ts";

type scenes = "scene1" | "scene2"| "sarg1" | "sarg2" | "mainMenu" | "intro" | "spiegel" | "gitter1" | "gitter2"

let currentPlace:scenes = "mainMenu"
let brettCollected:boolean = false
let scenesVisited: number = 0
const inventoryBrett = document.getElementById("inventory-brett") as HTMLImageElement;

function changeScene(scene:scenes) {
    if (currentPlace === "scene1" && soundOn) {
        let audio = new Audio("sounds/Door2.mp3")
        audio.play()
    }
    if (scene === "spiegel") {
        console.log(brettCollected)
        if (brettCollected) {
            scene = "gitter2"
        }else {
            scene = "gitter1"
        }
    }
    if (scenesVisited > 4 && !brettCollected) {
        scene2Brett.classList.remove("hidden")
    }
    scenesVisited += 1


    currentPlace = scene
    let htmlScenes = document.getElementsByClassName("scene")
    for (let i = 0; i < htmlScenes.length; i++) {
        htmlScenes[i].classList.add("hidden")
    }
    let element:HTMLElement = document.getElementById(scene)!
    console.log(scene)
    element.classList.remove("hidden")
    if (scene === "intro") {
        loadIntro()
    }
}
const sceneSwitchers = document.querySelectorAll<HTMLButtonElement>("button.changeScene");
for (const sceneSwitcher of sceneSwitchers) {
    let target:scenes = sceneSwitcher.dataset.target as scenes;
    sceneSwitcher.addEventListener("click", () => {
        changeScene(target);
    })
}

const crawler = document.getElementById("crawl") as HTMLDivElement;
function loadIntro() {
    crawler.classList.add("crawl")
}
crawler.addEventListener("animationend", () => {
    changeScene("scene1");
})
const skipButton = document.getElementById("skipIntro") as HTMLButtonElement;
skipButton.addEventListener("click",() => {
    changeScene("scene1");
    crawler.classList.remove("crawl");
})


function checkcode() {
    let digit = []
    for (let i = 0; i < 4; i++) {
        digit[i] = (document.getElementById("digit"+i) as HTMLInputElement).value!;
    }
    const tmp = digit.join()
    console.log("try "+tmp)
    if (tmp === "1,2,4,2") {
        console.log("pass")
        inventoryBrett.classList.add("hidden")

        changeScene('sarg2')
    } else {
        for (let i = 0; i < 4; i++) {
            (document.getElementById("digit"+i) as HTMLInputElement).value = ""
        }
    }
}
const checkCodeButton = document.getElementById("checkCode") as HTMLButtonElement
checkCodeButton.addEventListener("click", checkcode)

const scene2Brett = document.getElementById("scene2-brett") as HTMLImageElement
scene2Brett.addEventListener("click", () => {
    brettCollected = true;
    scene2Brett.classList.add("hidden")
    inventoryBrett.classList.remove("hidden")
})