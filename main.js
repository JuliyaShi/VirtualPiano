document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/A.mp3";
        audio.play();
    }else if(event.code == "KeyS") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/S.mp3";
        audio.play();
    }else if(event.code == "KeyD") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/D.mp3";
        audio.play();
    }else if(event.code == "KeyF") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/F.mp3";
        audio.play();
    }else if(event.code == "KeyG") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/G.mp3";
        audio.play();
    }else if(event.code == "KeyH") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/H.mp3";
        audio.play();
    }else if(event.code == "KeyJ") {
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/J.mp3";
        audio.play();
    } else if (event.code == "KeyW") {
        console.log("The 'W' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/do-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyE") {
        console.log("The 'E' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/re-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyT") {
        console.log("The 'T' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/fa-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyY") {
        console.log("The 'Y' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/sol-diez.mp3";
        audio.play();
    }
    else if (event.code == "KeyU") {
        console.log("The 'U' key is pressed.");
        let audio = document.createElement("AUDIO");
        audio.src = "Audio/lja-diezi.mp3";
        audio.play();
    }
    else {
        console.log("Warning");
        alert('This key is not handle')
    }

});