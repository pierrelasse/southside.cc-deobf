/* Original: https://korbi.cc/cdn/js/title.js */

const oldTitle = document.title;
document.addEventListener('visibilitychange', () => {
    document.hidden ? document.title = 'where you going?' : document.title = oldTitle;
});
