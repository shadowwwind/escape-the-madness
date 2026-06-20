import type {scenes} from "./main.ts";
import mainDooreSound from "../public/assets/Door1cut.mp3"
import openCoffinSound from "../public/assets/coffincut.mp3"
import mantionNight from "../public/assets/224_Mansion_Night.mp3"

export let soundOn:boolean = true;
export let musicOn:boolean = true;


const soundButtons = document.querySelectorAll<HTMLButtonElement>("button.soundToggle");
const musicButtons = document.querySelectorAll<HTMLButtonElement>("button.musicToggle");

for (const soundButton of soundButtons) {
    soundButton.addEventListener("click", toggleSounds)
}
for (const musicButton of musicButtons) {
    musicButton.addEventListener("click", toggleMusic)
}
function toggleSounds():boolean {
    soundOn = !soundOn;

    if (soundOn) {
        for (const soundButton of soundButtons) {
            soundButton.innerText = "Sound ist an"
        }
    }else {
        for (const soundButton of soundButtons) {
            soundButton.innerText = "Sound ist aus"
        }
    }

    return soundOn;
}
function toggleMusic():boolean {
    musicOn = !musicOn;

    if (musicOn) {
        for (const musicButton of musicButtons) {
            musicButton.innerText = "Musik ist an"
            backgroundMusic.play()

        }
    }else {
        for (const musicButton of musicButtons) {
            backgroundMusic.pause()
            musicButton.innerText = "Musik ist aus"
        }
    }

    return musicOn;
}


export function playSoundSceneSwitch(oldScene:scenes, newScene:scenes) {
    if (soundOn) {
        if (oldScene === "scene1" && newScene === "scene2") {
            let doorSound = new Audio(mainDooreSound)
            doorSound.volume = 0.3;
            doorSound.play()
        }
        if (oldScene === "sarg1" && newScene === "sarg2") {
            let doorSound = new Audio(openCoffinSound)
            doorSound.volume = 0.3;
            doorSound.play()
        }
    }
}

let backgroundMusic = new Audio(mantionNight)
backgroundMusic.volume  = 0.5
document.getElementById("startButton")?.addEventListener("click", () => {
    backgroundMusic.play()
})
