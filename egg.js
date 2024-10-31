var clicks = 0;

const egg = document.createElement('button')
egg.style.position = "fixed";
egg.style.width = "255px";
egg.style.height = "32px";
egg.style.left = "25px";
egg.style.bottom = "25px";
egg.innerText = "Click Me!"

egg.onclick = () => {
    clicks = clicks + 1;
    if (clicks > 10) {
        egg.innerText = "Boo!"
    } else if (clicks > 31) {
        egg.innerText = "Spooky!"
    } else if (clicks > 2024) {
        egg.innerText = "Happy halloween!"
    }
}

document.body.appendChild(egg)