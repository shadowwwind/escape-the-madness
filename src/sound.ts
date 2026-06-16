export let soundOn:boolean = true;

const soundButtons = document.querySelectorAll<HTMLButtonElement>("button.soundToggle");
for (const soundButton of soundButtons) {
    soundButton.addEventListener("click", toggleSounds)
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