/* Original: https://korbi.cc/cdn/js/script.js */

// ['contextmenu', 'selectstart', 'select', 'dragstart', 'drag', 'drop'].forEach(i => {
//     document.addEventListener(i, e => {
//         e.preventDefault();
//     });
// });

document.querySelectorAll('video').forEach(i => {
    i.loop = true;
    i.playsInline = true;
    i.disablePictureInPicture = true;
});

document.querySelectorAll('audio').forEach(i => {
    i.loop = true;
});

window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingElement = document.getElementById('loading');
        loadingElement.style.opacity = 0;
        loadingElement.addEventListener('transitionend', () => {
            return loadingElement.remove();
        });
    }, 500);
});

document.getElementById('enter').addEventListener('click', () => {
    const enterElement = document.getElementById('enter');
    enterElement.style.opacity = 0;
    enterElement.addEventListener('transitionend', () => {
        return enterElement.remove();
    });

    document.getElementById('video').play();
    // document.getElementById('audio').play(); // Idk why it's in there but audio is not defined bec it comes from the vid itself
});

const videoElement = document.getElementById('video');
videoElement.volume = 0;
const audoElement = document.getElementById('audio');
audoElement.volume = 0;
const volumeElement = document.getElementById('volume');
volumeElement.volume = 0;
volumeElement.addEventListener('input', i => {
    videoElement.volume = i.currentTarget.value / 100;
    audoElement.volume = i.currentTarget.value / 100;
});
