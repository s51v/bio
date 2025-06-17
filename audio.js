let titleText = "sylvie.";
let opacity = 0;
let fadeIn = true;
let delay = 0.007;

function updateTitle() {
    let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
    document.title = displayText;

    if (fadeIn) {
        opacity += delay;
        if (opacity >= 1) {
            fadeIn = false;
        }
    } else {
        opacity -= delay;
        if (opacity <= 0) {
            fadeIn = true;
        }
    }

    requestAnimationFrame(updateTitle);
}

     document.addEventListener('DOMContentLoaded', () => {
                const overlay = document.getElementById('overlay');
                const content = document.querySelector('.html');
                const bgMusic = document.getElementById('bg-music');
                const volumeControl = document.getElementById('volume-control');
    
                overlay.addEventListener('click', () => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        bgMusic.play();
                    }, 1000);
                });
                volumeControl.addEventListener('input', (e) => {
                    bgMusic.volume = e.target.value;
                });
            });
  