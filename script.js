function playSong(isYes) {
    var yesPlayer = document.getElementById("yes-player");
    var noPlayer = document.getElementById("no-player");

    if (isYes) {
        alert("Yay! You said Yes! ❤️");
        yesPlayer.style.display = "block";
        noPlayer.style.display = "none";
        playSoundCloud(yesPlayer);
        startLoveEmojis(); // Start love emojis when Yes is clicked
    } else {
        alert("Oh no! Are you sure? 😢");
        noPlayer.style.display = "block";
        yesPlayer.style.display = "none";
        playSoundCloud(noPlayer);
        startSadEmojis(); // Start sad emojis when No is clicked
    }
}

function playSoundCloud(player) {
    var iframe = player.querySelector("iframe");
    var widget = SC.Widget(iframe);
    
    widget.play();
}

// Load SoundCloud API dynamically
function loadSoundCloudAPI() {
    var script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    document.head.appendChild(script);
}

// Ensure the API loads before the user interacts
window.onload = loadSoundCloudAPI;

function startLoveEmojis() {
    setInterval(() => {
        let loveEmoji = document.createElement("div");
        loveEmoji.classList.add("confetti-piece");
        loveEmoji.innerText = "❤️";
        loveEmoji.style.left = Math.random() * 100 + "vw";
        loveEmoji.style.animationDuration = (Math.random() * 5 + 3) + "s";
        loveEmoji.style.position = "absolute";
        loveEmoji.style.top = "-10vh";
        loveEmoji.style.fontSize = "2rem";
        document.body.appendChild(loveEmoji);

        setTimeout(() => loveEmoji.remove(), 8000);
    }, 500);
}

function startSadEmojis() {
    setInterval(() => {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = "😢";
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 5 + 3) + "s";
        emoji.style.position = "absolute";
        emoji.style.top = "-10vh";
        emoji.style.fontSize = "2rem";
        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 8000);
    }, 500);
}
