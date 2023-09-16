/* Original: https://korbi.cc/cdn/js/sparkle.js */

const star = [];
const star_x = [];
const star_y = [];
const star_remaining_ticks = [];
const tiny = [];
const tiny_x = [];
const tiny_y = [];
const tiny_remaining_ticks = [];
let doc_height;
let doc_width;
let sparkles_enabled = null;

window.onload = function () {
    doc_height = document.documentElement.scrollHeight;
    doc_width = document.documentElement.scrollWidth;
    animate_sparkles();
    if (sparkles_enabled === null) {
        sparkle(true);
    }
};

function sparkle(arg1 = null) {
    if (arg1 === null) {
        sparkles_enabled = !sparkles_enabled;
    } else {
        sparkles_enabled = !!arg1;
    }

    if (sparkles_enabled && star.length < 250) {
        sparkle_init();
    }
}

function sparkle_destroy() {
    let element;
    while (tiny.length) {
        element = tiny.pop();
        if (element) {
            document.body.removeChild(element);
        }
    }
    while (star.length) {
        element = star.pop();
        if (element) {
            document.body.removeChild(element);
        }
    }
}

function sparkle_init() {
    function createSparkleElement(height, width) {
        const el = document.createElement("div");
        el.style.position = "absolute";
        el.style.height = height + "px";
        el.style.width = width + "px";
        el.style.overflow = "hidden";
        return el;
    }

    for (let i = 0; i < 250; i++) {
        const sparkle = createSparkleElement(3, 3);
        sparkle.style.visibility = "hidden";
        sparkle.style.zIndex = "999";
        if (tiny[i]) {
            document.body.removeChild(tiny[i]);
        }
        document.body.appendChild(sparkle);
        tiny[i] = sparkle;
        tiny_remaining_ticks[i] = null;
        const sparkle1 = createSparkleElement(5, 5);
        sparkle1.style.backgroundColor = "transparent";
        sparkle1.style.visibility = "hidden";
        sparkle1.style.zIndex = "999";
        const sparkle2 = createSparkleElement(1, 5);
        const sparkle3 = createSparkleElement(5, 1);
        sparkle1.appendChild(sparkle2);
        sparkle1.appendChild(sparkle3);
        sparkle2.style.top = "2px";
        sparkle2.style.left = "0px";
        sparkle3.style.top = "0px";
        sparkle3.style.left = "2px";
        if (star[i]) {
            document.body.removeChild(star[i]);
        }
        document.body.appendChild(sparkle1);
        star[i] = sparkle1;
        star_remaining_ticks[i] = null;
    }

    window.addEventListener("resize", function () {
        for (let i = 0; i < 250; i++) {
            const loopList = ['0', '2', '6', '3', '4', '1', '7', '5'];
            let iter = 0;
            while (true) {
                switch (loopList[iter++]) {
                    case "0":
                        star_remaining_ticks[i] = null;
                        continue;
                    case "1":
                        tiny[i].style.top = "0px";
                        continue;
                    case "2":
                        star[i].style.left = "0px";
                        continue;
                    case "3":
                        star[i].style.visibility = "hidden";
                        continue;
                    case "4":
                        tiny_remaining_ticks[i] = null;
                        continue;
                    case "5":
                        tiny[i].style.visibility = "hidden";
                        continue;
                    case "6":
                        star[i].style.top = "0px";
                        continue;
                    case "7":
                        tiny[i].style.left = "0px";
                        continue;
                }
                break;
            }
        }
        doc_height = document.documentElement.scrollHeight;
        doc_width = document.documentElement.scrollWidth;
    });

    document.onmousemove = function (arg1) {
        if (sparkles_enabled && !arg1.buttons) {
            const _0x984ex67 = Math.sqrt(Math.pow(arg1.movementX, 2) + Math.pow(arg1.movementY, 2));
            const _0x984ex68 = arg1.movementX * 30 * 2 / _0x984ex67;
            const _0x984ex69 = arg1.movementY * 30 * 2 / _0x984ex67;
            const _0x984ex6a = _0x984ex67 / 30;
            let i = 0;
            let iy = arg1.pageY;
            let ix = arg1.pageX;
            while (Math.abs(i) < Math.abs(arg1.movementX)) {
                create_star(ix, iy, _0x984ex6a);
                let _0x984ex6e = Math.random();
                ix -= _0x984ex68 * _0x984ex6e;
                iy -= _0x984ex69 * _0x984ex6e;
                i += _0x984ex68 * _0x984ex6e;
            }
        }
    };
}
function animate_sparkles(arg1 = 60) {
    let a = 0;
    for (let i = 0; i < star.length; i++) {
        a += update_star(i);
    }
    for (let i = 0; i < tiny.length; i++) {
        a += update_tiny(i);
    }
    if (a === 0 && !sparkles_enabled) {
        sparkle_destroy();
    }
    setTimeout("animate_sparkles(" + arg1 + ")", 1e3 / arg1);
}

function create_star(arg1, arg2, arg3 = 1) {
    if (arg1 + 5 >= doc_width || arg2 + 5 >= doc_height) {
        return;
    }
    if (Math.random() > arg3) {
        return;
    }
    let _0x984exb4 = 61;
    let _0x984exb5 = NaN;
    for (let _0x984exb6 = 0; _0x984exb6 < 250; _0x984exb6++) {
        if (!star_remaining_ticks[_0x984exb6]) {
            _0x984exb4 = null;
            _0x984exb5 = _0x984exb6;
            break;
        } else if (star_remaining_ticks[_0x984exb6] < _0x984exb4) {
            _0x984exb4 = star_remaining_ticks[_0x984exb6];
            _0x984exb5 = _0x984exb6;
        }
    }
    if (_0x984exb4) {
        star_to_tiny(_0x984exb5);
    }
    if (_0x984exb5 >= 0) {
        const iterlist = ['8', '6', '1', '5', '3', '0', '7', '2', '4'];
        let iter = 0;
        while (true) {
            switch (iterlist[iter++]) {
                case "0":
                    star[_0x984exb5].style.clip = "rect(0px, 5px, 5px, 0px)";
                    continue;
                case "1":
                    star[_0x984exb5].style.left = arg1 + "px";
                    continue;
                case "2":
                    star[_0x984exb5].style.visibility = "visible";
                    continue;
                case "3":
                    star[_0x984exb5].style.top = arg2 + "px";
                    continue;
                case "4":
                    return _0x984exb5;
                case "5":
                    star_y[_0x984exb5] = arg2;
                    continue;
                case "6":
                    star_x[_0x984exb5] = arg1;
                    continue;
                case "7":
                    star[_0x984exb5].childNodes[0].style.backgroundColor = star[_0x984exb5].childNodes[1].style.backgroundColor = "#ffffff";
                    continue;
                case "8":
                    star_remaining_ticks[_0x984exb5] = 60;
                    continue;
            }
            break;
        }
    }
}

function update_star(arg1) {
    if (star_remaining_ticks[arg1] === null) {
        return false;
    }
    star_remaining_ticks[arg1] -= 1;
    if (star_remaining_ticks[arg1] === 0) {
        star_to_tiny(arg1);
        return false;
    }
    if (star_remaining_ticks[arg1] === 30) {
        star[arg1].style.clip = "rect(1px, 4px, 4px, 1px)";
    }
    if (star_remaining_ticks[arg1] > 0) {
        star_y[arg1] += 1 + 3 * Math.random();
        star_x[arg1] += (arg1 % 5 - 2) / 5;
        if (star_y[arg1] + 5 < doc_height && star_x[arg1] + 5 < doc_width) {
            star[arg1].style.top = star_y[arg1] + "px";
            star[arg1].style.left = star_x[arg1] + "px";
            return true;
        }
    }
    star_remaining_ticks[arg1] = null;
    star[arg1].style.left = "0px";
    star[arg1].style.top = "0px";
    star[arg1].style.visibility = "hidden";
    return false;
}

function star_to_tiny(arg1) {
    if (star_remaining_ticks[arg1] === null) {
        return;
    }
    if (star_y[arg1] + 3 < doc_height && star_x[arg1] + 3 < doc_width) {
        const iterlist = ['1', '4', '7', '3', '6', '0', '9', '8', '5', '2'];
        let iter = 0;
        while (true) {
            switch (iterlist[iter++]) {
                case "0":
                    tiny[arg1].style.width = "2px";
                    continue;
                case "1":
                    tiny_remaining_ticks[arg1] = 60;
                    continue;
                case "2":
                    tiny[arg1].style.visibility = "visible";
                    continue;
                case "3":
                    tiny_x[arg1] = star_x[arg1];
                    continue;
                case "4":
                    tiny_y[arg1] = star_y[arg1];
                    continue;
                case "5":
                    star[arg1].style.visibility = "hidden";
                    continue;
                case "6":
                    tiny[arg1].style.left = star_x[arg1] + "px";
                    continue;
                case "7":
                    tiny[arg1].style.top = star_y[arg1] + "px";
                    continue;
                case "8":
                    tiny[arg1].style.backgroundColor = star[arg1].childNodes[0].style.backgroundColor;
                    continue;
                case "9":
                    tiny[arg1].style.height = "2px";
                    continue;
            }
            break;
        }
    }
    star_remaining_ticks[arg1] = null;
    star[arg1].style.left = "0px";
    star[arg1].style.top = "0px";
    star[arg1].style.visibility = "hidden";
}

function update_tiny(arg1) {
    const iterlist = ['1', '11', '10', '4', '3', '5', '9', '8', '6', '0', '2', '7'];
    let iter = 0;

    while (true) {
        switch (iterlist[iter++]) {
            case "0":
                tiny[arg1].style.left = "0px";
                continue;
            case "1":
                if (tiny_remaining_ticks[arg1] === null) {
                    return false;
                }
                continue;
            case "2":
                tiny[arg1].style.visibility = "hidden";
                continue;
            case "3":
                continue;
            case "4":
                if (tiny_remaining_ticks[arg1] === 30) {
                    tiny[arg1].style.width = "1px";
                    tiny[arg1].style.height = "1px";
                }
                continue;
            case "5":
                if (tiny_remaining_ticks[arg1] > 0) {
                    tiny_y[arg1] += 1 + 2 * Math.random();
                    tiny_x[arg1] += (arg1 % 4 - 2) / 4;
                    if (tiny_y[arg1] + 3 < doc_height && tiny_x[arg1] + 3 < doc_width) {
                        tiny[arg1].style.top = tiny_y[arg1] + "px";
                        tiny[arg1].style.left = tiny_x[arg1] + "px";
                        return true;
                    }
                }
                continue;
            case "6":
                tiny[arg1].style.top = "0px";
                continue;
            case "7":
                return false;
            case "8":
                tiny_remaining_ticks[arg1] = null;
                continue;
            case "9":
                continue;
            case "10":
                tiny_remaining_ticks[arg1] -= 1;
                continue;
            case "11":
                continue;
        }
        break;
    }
}
