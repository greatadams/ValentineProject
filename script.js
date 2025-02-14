function playSong(isYes) {
    var yesPlayer = document.getElementById("yes-player");
    var noPlayer = document.getElementById("no-player");
    
    if (isYes) {
        alert("Yay! You said Yes! ❤️");
        yesPlayer.style.display = "block";
        noPlayer.style.display = "none";
        playIframeAudio(yesPlayer);
        startLoveEmojis();
    } else {
        alert("Oh no! Are you sure? 😢");
        noPlayer.style.display = "block";
        yesPlayer.style.display = "none";
        playIframeAudio(noPlayer);
        startSadEmojis();
    }
}

function playIframeAudio(player) {
    var iframe = player.querySelector("iframe");
    var src = iframe.src;
    iframe.src = ""; // Reset src to force reload
    setTimeout(() => { iframe.src = src; }, 100); // Reapply src after a short delay
}

function startLoveEmojis() {
    setInterval(() => {
        let loveEmoji = document.createElement("div");
        loveEmoji.classList.add("confetti-piece");
        loveEmoji.innerText = "❤️";
        loveEmoji.style.left = Math.random() * 100 + "vw";
        loveEmoji.style.animationDuration = (Math.random() * 5 + 3) + "s";
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
        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 8000);
    }, 500);
}
